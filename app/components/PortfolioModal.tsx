'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    category: string;
    url: string | null;
    screenshotUrl?: string;
  } | null;
}

export default function PortfolioModal({
  isOpen,
  onClose,
  project,
}: PortfolioModalProps) {
  if (!project) return null;

  const getScreenshotUrl = () => {
    if (project.title === 'ePostersLive')
      return '/images/eposterslive-screenshot.jpeg';
    if (project.title === 'InstaJudge')
      return '/images/instajudge-screenshot.jpeg';
    return null;
  };

  const screenshotUrl = getScreenshotUrl();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='sm:max-w-[600px] max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>{project.title}</DialogTitle>
          <DialogDescription className='text-primary'>
            {project.category}
          </DialogDescription>
        </DialogHeader>

        {screenshotUrl && (
          <div className='relative w-full h-[300px] my-4 rounded-lg overflow-hidden'>
            <Image
              src={screenshotUrl || '/placeholder.svg'}
              alt={`${project.title} screenshot`}
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        )}

        <div className='my-4'>
          <p className='text-foreground'>{project.description}</p>
        </div>

        {project.url && !project.url.startsWith('/#') && (
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'
          >
            Visit Website <ExternalLink className='ml-2 h-4 w-4' />
          </a>
        )}

        {project.url && project.url.startsWith('/#') && (
          <a
            href={project.url}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const targetId = project.url!.replace('/#', '');
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className='flex items-center justify-center w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'
          >
            Contact Us
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}
