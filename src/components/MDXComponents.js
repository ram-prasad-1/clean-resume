import TOCInline from 'pliny/ui/TOCInline';
import Pre from 'pliny/ui/Pre';
import Image from '@/components/Image';
import CustomLink from '@/components/Link';
import Script from 'next/script';
import GitHubCard from '@/components/GitHubCard';

export const components = {
  Image,
  Script,
  TOCInline,
  GitHubCard,
  a: CustomLink,
  pre: Pre,
};
