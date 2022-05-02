import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';
import { InlineCode } from '@components/InlineCode';
import { Hyperlink } from '@components/Hyperlink';
import { Heading } from '@components/Heading';

const JumplistDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist"
      />
      <h1>
        Jumplist
      </h1>
      <p>
        The jumplist package is a powerful way to create and track jumplist items as they pass through the viewport. This makes it possible to highlight the current item in a navigation menu as the user scrolls through content.
      </p>
      <Margin bottom="xs">
        <Heading
          id="installation"
          href="/docs/jumplist#installation"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#installation`}
          element='h5'
        >
          Installation
        </Heading>
        <InstallationCode name="jumplist" />
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="how-it-works"
          href="/docs/jumplist#how-it-works"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#how-it-works`}
          element='h5'
        >
          How it works
        </Heading>
        <p>
          {'In the top-level of your app, a '}
          <InlineCode>
            JumplistProvider
          </InlineCode>
          {' is used to provide context to every component that needs it. Then, anywhere in your app a '}
          <InlineCode>
            JumplistNode
          </InlineCode>
          {' can be rendered, which subscribes itself to the provider. This jumplist node is a wrapper around the '}
          <Hyperlink
            href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
            newTab
            underline
          >
            Intersection Observer API
          </Hyperlink>
          {' which is used to determine when the node is visible in the viewport. As nodes traverse in and out of the viewport they report their statuses.'}
        </p>
        <p>
          {'The jumplist context can be accessed from anywhere in your app using the '}
          <InlineCode>
            useJumplist
          </InlineCode>
          {' hook which contains an array of jumplist items, each with an '}
          <InlineCode>
            isIntersecting
          </InlineCode>
          {' property. If more than one node is intersecting, and you do not want both menu items to be styled, there are other properties try the '}
          <InlineCode>
            currentJumplistIndex
          </InlineCode>
          {' or '}
          <InlineCode>
            activeJumplistIndex
          </InlineCode>
          {' instead.'}
        </p>
      </Margin>
      <Margin bottom="xs">
        <Heading
          id="features"
          href="/docs/jumplist#features"
          copyToClipboard={`${process.env.NEXT_PUBLIC_APP_URL}/docs/jumplist#features`}
          element='h5'
        >
          Key features
        </Heading>
        <p>
          This section has no content
        </p>
      </Margin>
    </Fragment>
  )
}

JumplistDoc.Layout = Doc;

export default JumplistDoc;
