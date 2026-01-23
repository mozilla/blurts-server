/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useEffect, useState } from "react";

/**
 * Hook to help selectively opting out of static site generation
 *
 * Sometimes you want to adapt the appearance of a component based on specific
 * characteristics of the user's in-browser environment. However, this can
 * cause problems: we pre-render our components to static HTML before sending
 * them to the user, and then React re-renders the components on the client-
 * side, and matches the resulting HTML with the HTML that we already sent to
 * the browser. If those two don't align, that can cause hydration errors; see
 * https://nextjs.org/docs/messages/react-hydration-error?trk=public_post_comment-text
 *
 * To avoid this, you can use this hook to defer client-side adjustments until
 * after* hydration. That way, React knows how the adjustments are different
 * from the initial render, and can apply just those changes.
 *
 * @returns Whether the component has already rendered client-side; if `true`,
 *          subsequent renders are guaranteed to be on the client-side.
 */
export function useHasRenderedClientSide() {
  const [hasRenderedClientSide, setHasRenderedClientSide] = useState(false);

  useEffect(() => {
    // Usually, you don't want to set state in effects, because
    // in essence, it causes duplicate work. In this case, however,
    // we do need two renders: one that's equal to the server-side
    // render, and one where we depend on the client-side environment.
    // In other words, we cannot use the approach suggested at the
    // following docs, because that would skip the first render,
    // and we need that to align with what happens on the server-side:
    // https://react.dev/learn/you-might-not-need-an-effect#initializing-the-application
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasRenderedClientSide(true);
  }, []);

  return hasRenderedClientSide;
}
