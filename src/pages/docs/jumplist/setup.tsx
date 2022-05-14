import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { VersionNumber } from '@components/VersionNumber';
import Margin from '@components/Margin';
import { Heading } from '@components/Heading';
import { InstallationCode } from '@components/InstallationCode';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { CodeBlock } from '@components/CodeBlock';

const JumplistSetup = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist Basic Setup"
      />
      <h1>
        Basic Setup
      </h1>
      <p>
        {'Latest version: '}
        <VersionNumber
          name="jumplist"
          element='span'
        />
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/jumplist/setup#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="jumplist" />
      </Margin>
      <p>
        {'To track elements as they enter and exit the viewport, you first need to wrap your app with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider"
          >
            {'<JumplistProvider>'}
          </Hyperlink>
        </InlineCode>
        {'. This does not render anything in the DOM and is where the '}
        <Hyperlink
          href="/docs/jumplist/api#provider-props"
          underline
        >
          global settings
        </Hyperlink>
        {' are defined. This will maintain the state of every jumplist node in your app and provide this state through context. '}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistProvider } from \'@faceless-ui/jumplist\';

export const MyApp = () => {
  return (
    <JumplistProvider
      threshold={0.05}
      rootMargin="-100px 0px 0px 0px"
    >
      ...
    </JumplistProvider>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Then, use a '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#node"
          >
            {'<JumplistNode>'}
          </Hyperlink>
        </InlineCode>
        {' for every element you want to track. The only required prop of this component is the '}
        <InlineCode>
          nodeID
        </InlineCode>
        {', the unique string identifying each node.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <div>
      <JumplistNode nodeID="node-1">
        Node 1
      </JumplistNode>
      <JumplistNode nodeID="node-2">
        Node 2
      </JumplistNode>
    </div>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Every node is a wrapper around the '}
        <Hyperlink
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          newTab
          underline
        >
          Intersection Observer API
        </Hyperlink>
        {', reporting their '}
        <InlineCode>
          isIntersecting
        </InlineCode>
        {' status to the '}
        <Hyperlink
          underline
          href="/docs/jumplist/api#context"
        >
          jumplist context
        </Hyperlink>
        {'. You can access this from anywhere with the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#useJumplist"
          >
            useJumplist
          </Hyperlink>
        </InlineCode>
        {' hook.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { useJumplist } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  const { jumplist } = useJumplist();

  return (
    <div>
      {jumplist.map((node, index) => {
        const { isIntersecting } = node;
        return (
          <div key={index}>
            {\`Node \${index} is intersecting: \${isIntersecting}\`}
          </div>
        )
      })}
    </div>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'You could also pass a function as a child to the '}
        <InlineCode>
          {'<JumplistNode>'}
        </InlineCode>
        {' to immediately return the context of that node.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { JumplistNode } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  return (
    <JumplistNode nodeID="node-1">
      {({ isIntersecting }) => (
        <div>
          {\`Is intersecting: \${isIntersecting}\`}
        </div>
      )}
    </JumplistNode>
  )
}`}
        </CodeBlock>
      </Margin>
      <Heading
        id="navigation"
        href="/docs/jumplist/setup#navigation"
        copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#navigation`}
        element='h5'
      >
        Navigation
      </Heading>
      <p>
        {'to navigate jumplist nodes we rely entirely on native HTML behavior. By adding a hash to the URL that matches the id of an element in the document, the browser will automatically scroll to that element. You can also enable '}
        <Hyperlink
          href='/docs/jumplist/setup#smooth-scroll'
          underline
        >
          smooth scrolling
        </Hyperlink>
        {'.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';

export const MyComponent = () => {
  return (
    <a href="#node-1">
      Go to node 1
    </a>
  )
}`}
        </CodeBlock>
      </Margin>
      <p>
        {'Alternatively, you can navigate jumplist nodes directly using the '}
        <InlineCode>
          scrollToID
        </InlineCode>
        {' method. This does not inject a hash into the URL, but instead relies on the native browser '}
        <Hyperlink
          underline
          href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView"
          newTab
        >
          scrollIntoView
        </Hyperlink>
        {' API.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`import React from 'react';
import { useJumplist } from \'@faceless-ui/jumplist\';

export const MyComponent = () => {
  const { scrollToID } = useJumplist();
  return (
    <button onClick={() => { scrollToID('node-1'); }}>
      Jump to Node 1
    </button>
  )
}`}
        </CodeBlock>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="smooth-scroll"
          href="/docs/jumplist/setup#smooth-scroll"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist/setup#smooth-scroll`}
          element='h5'
        >
          Smooth-scrolling
        </Heading>
      </Margin>
      <p>
        {'This package does not perform any smooth-scrolling of its own, and instead relies on native CSS '}
        <InlineCode>
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"
            underline
            newTab
          >
            scroll-behavior
          </Hyperlink>
        </InlineCode>
        {' property. Set this property on the root html element of your document.'}
      </p>
      <Margin bottom="xs">
        <CodeBlock>
          {`html: { scroll-behavior: smooth; }`}
        </CodeBlock>
      </Margin>
      <p>
        {'Or use the '}
        <InlineCode>
          <Hyperlink
            underline
            href="/docs/jumplist/api#provider-props"
          >
            smoothScroll
          </Hyperlink>
        </InlineCode>
        {' prop on the provider, which sets this property as inline CSS.'}
      </p>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/setup.tsx`}
    />
  )
};

JumplistSetup.Layout = DocLayout;

export default JumplistSetup;
