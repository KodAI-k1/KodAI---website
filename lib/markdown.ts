import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  content: string;
}

const caseStudiesDirectory = path.join(process.cwd(), 'data/case-studies');

export function getAllCaseStudies(): CaseStudy[] {
  try {
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    const allCaseStudies = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(caseStudiesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          client: data.client,
          description: data.description,
          image: data.image,
          metrics: data.metrics || [],
          tags: data.tags || [],
          content: md.render(content),
        } as CaseStudy;
      });

    return allCaseStudies;
  } catch {
    return [];
  }
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      client: data.client,
      description: data.description,
      image: data.image,
      metrics: data.metrics || [],
      tags: data.tags || [],
      content: md.render(content),
    } as CaseStudy;
  } catch {
    return null;
  }
}
