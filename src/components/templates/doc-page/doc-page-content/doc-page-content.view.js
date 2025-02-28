import classNames from 'classnames';
import { HtmlContent } from 'components/blocks/html-content';
import Glossary from 'components/pages/doc-page/glossary';
import TableOfContents from 'components/pages/doc-page/table-of-contents';
import Blockquote from 'components/shared/blockquote';
import { Code, CodeInline, CodeGroup } from 'components/shared/code';
import Collapsible from 'components/shared/collapsible';
import { HeadingLandmark } from 'components/shared/heading';
import LdScript from 'components/shared/ld-script';
import { Link } from 'components/shared/link';
import TableWrapper from 'components/shared/table-wrapper';
import React, { useRef } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import styles from './doc-page-content.module.scss';

const componentsForNativeReplacement = {
  h2: HeadingLandmark('h2'),
  h3: HeadingLandmark('h3'),
  table: TableWrapper,
  blockquote: Blockquote,
  Blockquote,
  LdScript,
  Glossary,
  inlineCode: CodeInline,
  pre: Code,
  CodeGroup,
  Collapsible,
  CodeInline,
};

export const DocPageContent = ({ label, content, mod, version }) => {
  const contentContainerRef = useRef(null);
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.beliefs]: mod === 'beliefs',
      })}
    >
      <div className={`${styles.inner}`}>
        <StickyContainer>
          <div
            ref={contentContainerRef}
            className={classNames(styles.mainDocContent, {
              [styles.beliefs]: mod === 'beliefs',
            })}
          >
            <HtmlContent
              content={content}
              componentsForNativeReplacement={{
                ...componentsForNativeReplacement,
                a: Link(version),
              }}
              className={classNames(
                styles.contentWrapper,
                { [styles.beliefs]: mod === 'beliefs' },
                label,
              )}
            />
          </div>

          <Sticky topOffset={-15} bottomOffset={0} disableCompensation>
            {({ style }) => (
              <TableOfContents
                style={{ ...style, left: 350 }}
                contentContainerRef={contentContainerRef}
              />
            )}
          </Sticky>
        </StickyContainer>
      </div>
    </div>
  );
};
