/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const animationPreview = data => `
  <section class='animation-container'>
    <h1>Animation preview</h1>
    <div class='animation-controls'>
      <custom-select name='animation-files'>
        ${data.animations.map((animation) => (`
          <option value='${animation.filename}'>
            ${animation.name}
          </option>
        `))}
      </custom-select>

      <button class='animation-button primary'>Play/Pause</button>
    </div>
    <hr class='monitor-gradient'>
    <div class='animation-canvas'></div>
  </section>
`
