import type { ArticleBlock } from '../../model/types/article.types';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case 'code': {
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
        />
      );
    }
    case 'image': {
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
        />
      );
    }
    case 'text': {
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
        />
      );
    }
    default: {
      return null;
    }
  }
};
