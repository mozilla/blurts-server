/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render } from "@testing-library/react";
import { ExperimentsProvider, useExperiments } from "./experiments";
import { defaultExperimentData } from "../telemetry/generated/nimbus/experiments";

describe("Experiment context provider", () => {
  it("provides the experiment data", () => {
    const TestComponent = () => {
      const experimentData = useExperiments();
      expect(experimentData).not.toBeNull();
      return <div />;
    };
    const { container } = render(
      <ExperimentsProvider
        experimentData={defaultExperimentData}
        experimentationId="-1"
      >
        <TestComponent />
      </ExperimentsProvider>,
    );

    expect(container).toBeDefined();
  });

  it("does not provide experiment data", () => {
    const TestComponent = () => {
      const experimentData = useExperiments();
      expect(experimentData).toBeNull();
      return <div />;
    };
    const { container } = render(<TestComponent />);

    expect(container).toBeDefined();
  });
});
