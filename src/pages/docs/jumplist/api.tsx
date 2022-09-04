import React, { Fragment, useEffect } from 'react';
import { Doc } from '@root/layout/Doc';
import { JumplistNode, useJumplist } from '@faceless-ui/jumplist';
import { BasicProps } from '@components/BasicProps';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { jumplistAPINav } from '@root/docs-nav';
import { Heading } from '@components/Heading';
import Margin from '@components/Margin';
import { CodeBlock } from '@components/CodeBlock';
import { PropName } from '@components/PropName';
import { BasicContext } from '@components/BasicContext';

const JumplistAPI = () => {
  const {
    setJumplist,
    clearJumplist
  } = useJumplist();

  useEffect(() => {
    const jumplist = jumplistAPINav.map((item) => ({ nodeID: item.id || '' }));
    setJumplist(jumplist);
    return () => {
      clearJumplist();
    }
  }, [
    setJumplist,
    clearJumplist
  ])

  return (
    <Fragment>
      <h1>
        Jumplist API
      </h1>
      <JumplistNode nodeID="provider">
        <Heading
          id="provider"
          href="/docs/jumplist/api#provider"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider`}
          element='h4'
        >
          {'<JumplistProvider>'}
        </Heading>
        <p>
          {'This component provides the '}
          <Hyperlink href="#context">
            jumplist context
          </Hyperlink>
          {' to your app. It does not have any required props and renders nothing in the DOM. This is where the '}
          <Hyperlink href="#provider-props">
            global settings
          </Hyperlink>
          {' are defined.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { JumplistProvider } from \'@faceless-ui/jumplist\';

export const MyApp = () => {
  return (
    <JumplistProvider
      threshold={0.5}
      rootMargin="-100px 0px 0px 0px"
    >
      ...
    </JumplistProvider>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="provider-props"
          href="/docs/jumplist/api#provider-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#provider-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="rootMargin"
          type="string"
        />
        <p>
          {'The root margin of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
          >
            Intersection Observer API
          </Hyperlink>
          {'.'}
        </p>
        <PropName
          name="threshold"
          type="string"
        />
        <p>
          {'The threshold of the intersection observer. See the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
          >
            Intersection Observer API
          </Hyperlink>
          {'.'}
        </p>
        <PropName
          name="smoothScroll"
          type="boolean"
        />
        <p>
          {'Will inject '}
          <InlineCode>
            {'html: { scroll-behavior: smooth; }'}
          </InlineCode>
          {' as inline CSS onto the root html element of your DOM. See '}
          <Hyperlink href={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#smooth-scroll`}>
            smooth-scrolling
          </Hyperlink>
          {' for more details. Defaults to '}
          <InlineCode>
            true
          </InlineCode>
          {'.'}
        </p>
        <Heading
          id="context"
          href="/docs/jumplist/api#context"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#context`}
          element='h5'
        >
          Context
        </Heading>
        <PropName
          name="jumplist"
          type="array"
          isContextProp
        />
        <p>
          {'This is an array of jumplist nodes, each with its '}
          <InlineCode>
            <Hyperlink href="#isIntersecting">
              isIntersecting
            </Hyperlink>
          </InlineCode>
          {' status.'}
        </p>
        <PropName
          name="clearJumplist()"
          type="method"
          isContextProp
        />
        <p>
          This is a method you can use to empty the jumplist array.
        </p>
        <PropName
          name="currentJumplistIndex"
          type="number"
          isContextProp
        />
        <p>
          {'The first-most active jumplist node. Sometimes multiple nodes might be intersecting the viewport simultaneously. Is '}
          <InlineCode>
            -1
          </InlineCode>
          {' if no nodes are intersecting.'}
        </p>
        <PropName
          name="activeJumplistIndex"
          type="number"
          isContextProp
        />
        <p>
          {'The most recent jumplist node that has intersected. This is helpful when no nodes are intersecting and the '}
          <InlineCode>
            <Hyperlink href="#currentJumplistIndex">
              currentJumplistIndex
            </Hyperlink>
          </InlineCode>
          {' is '}
          <InlineCode>
            -1
          </InlineCode>
          {'. This property is essentially a cached index.'}
        </p>
        <PropName
          name="setJumplist(jumplist: array)"
          type="method"
          isContextProp
        />
        <p>
          A method used to set the jumplist.
        </p>
        <BasicContext />
      </JumplistNode>
      <JumplistNode nodeID="node">
        <Heading
          id="node"
          href="/docs/jumplist/api#node"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node`}
          element='h4'
        >
          {'<JumplistNode>'}
        </Heading>
        <p>
          {'Each jumplist node is a wrapper around the '}
          <Hyperlink
            newTab
            href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
          >
            Intersection Observer API
          </Hyperlink>
          {', and syncs its '}
          <InlineCode >
            isIntersecting
          </InlineCode>
          {' status to the provider.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <div>
      <JumplistNode nodeID="node-1">
        ...
      </JumplistNode>
      <JumplistNode nodeID="node-2">
        ...
      </JumplistNode>
    </div>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="node-props"
          href="/docs/jumplist/api#node-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="nodeID"
          required
          type="string"
        />
        <p>
          A unique string to identify this node.
        </p>
        <BasicProps />
      </JumplistNode>
      <JumplistNode nodeID="button">
        <Heading
          id="button"
          href="/docs/jumplist/api#button"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#button`}
          element='h4'
        >
          {'<JumplistButton>'}
        </Heading>
        <p>
          {'The jumplist button is a simple wrapper around the '}
          <InlineCode href="#useJumplist">
            useJumplist
          </InlineCode>
          {' hook, used to quickly and easily navigate to any node in the jumplist.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <div>
      <JumplistNode nodeID="node-1">
        ...
      </JumplistNode>
      <JumplistNode nodeID="node-2">
        ...
      </JumplistNode>
    </div>
  )
}`}
          </CodeBlock>
        </Margin>
        <Heading
          id="node-props"
          href="/docs/jumplist/api#node-props"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#node-props`}
          element='h5'
        >
          Props
        </Heading>
        <PropName
          name="nodeID"
          required
          type="string"
        />
        <p>
          A unique string to identify this node.
        </p>
        <BasicProps
          idPrefix="button"
          defaultElement='button'
        />
        <Heading
          id="button-a11y"
          href="#button-a11y"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/collapsibles/api#button-a11y`}
          element='h5'
        >
          Accessibility
        </Heading>
        <p>
          {'The '}
          <InlineCode>
            type
          </InlineCode>
          {' attribute is automatically set to "button" when the '}
          <InlineCode href="#button-htmlElement">
            htmlElement
          </InlineCode>
          {' is '}
          <InlineCode>
            button
          </InlineCode>
          {'.'}
        </p>
      </JumplistNode>
      <JumplistNode nodeID="useJumplist">
        <Heading
          id="useJumplist"
          href="/docs/jumplist/api#useJumplist"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#useJumplist`}
          element='h4'
        >
          useJumplist
        </Heading>
        <p>
          {'A hook used to access the '}
          <Hyperlink href="#context">
            jumplist context
          </Hyperlink>
          {'.'}
        </p>
        <Margin bottom="xs">
          <CodeBlock>
            {`import React from 'react';
import { useJumplist } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  const jumplist = useJumplist();

  return (
    ...
  )
}`}
          </CodeBlock>
        </Margin>
      </JumplistNode>
      <JumplistNode nodeID="typescript">
        <Heading
          id="typescript"
          href="/docs/jumplist/api#typescript"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/api#typescript`}
          element='h4'
        >
          TypeScript
        </Heading>
        <p>
          All types can be directly imported
        </p>
        <CodeBlock>{`import {
  JumplistButtonProps,
  JumplistNodeProps,
  IJumplistContext,
  JumplistNode,
  JumplistNodes,
  JumplistProviderProps
} from '@faceless-ui/jumplist/dist/types';`}
        </CodeBlock>
      </JumplistNode>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/api.tsx`}
      metaTitle="Jumplist API"
      metaDescription="API documentation for the @faceless-ui/jumplist npm module."
      metaURL="/docs/jumplist/api"
    />
  )
};

JumplistAPI.Layout = DocLayout;

export default JumplistAPI;
