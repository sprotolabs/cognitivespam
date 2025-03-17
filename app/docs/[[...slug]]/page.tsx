import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

// Function to get MDX content
async function getMdxContent(slug: string[] | undefined) {
  // If no slug is provided, use the index.mdx file
  const filePath = !slug || slug.length === 0
    ? path.join(process.cwd(), 'content/docs/index.mdx')
    : path.join(process.cwd(), 'content/docs', `${slug.join('/')}.mdx`);

  console.log('Attempting to read file:', filePath);
  console.log('Current working directory:', process.cwd());
  console.log('Slug:', slug);

  // Check if file exists before trying to read it
  try {
    const fileExists = await fs.promises.access(filePath).then(() => true).catch(() => false);
    console.log('File exists:', fileExists);
    
    if (!fileExists) {
      // List files in the directory to help with debugging
      const dir = path.dirname(filePath);
      try {
        const files = await fs.promises.readdir(dir);
        console.log('Files in directory:', files);
      } catch (err) {
        console.log('Error reading directory:', err);
      }
    }
    
    if (fileExists) {
      const content = await fs.promises.readFile(filePath, 'utf8');
      return content;
    }
    return null;
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

export default async function DocsPage({ params }: { params: { slug?: string[] } }) {
  // Ensure params is awaited
  const resolvedParams = await Promise.resolve(params);
  const content = await getMdxContent(resolvedParams.slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose dark:prose-invert">
        <pre>{content}</pre>
      </div>
    </div>
  );
}
