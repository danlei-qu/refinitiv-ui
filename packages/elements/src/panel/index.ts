import {
  BasicElement,
  html,
  customElement,
  property,
  CSSResult,
  css,
  TemplateResult
} from '@refinitiv-ui/core';
import { VERSION } from '../version';

/**
 * A container for components.
 * It provides a standard background color and padding, depends on theme.
 */
@customElement('ef-panel', {
  alias: 'coral-panel'
})
export class Panel extends BasicElement {

  /**
   * Element version number
   * @returns version number
   */
  static get version (): string {
    return VERSION;
  }

  /**
   * A `CSSResult` that will be used
   * to style the host, slotted children
   * and the internal template of the element.
   * @return CSS template
   */
  static get styles (): CSSResult | CSSResult[] {
    return css`
      :host {
        position: relative;
        display: block;
        overflow: hidden;
        box-sizing: border-box;
      }

      :host([transparent]) {
        background: transparent;
        border: 0;
      }

      :host([spacing]) {
        padding: 10px; /* default padding - can be overridden by theme */
      }
    `;
  }

  /**
   * Apply default padding from theme
   */
  @property({ type: Boolean, reflect: true })
  public spacing = false;

  /**
   * Set panel background to transparent
   */
  @property({ type: Boolean, reflect: true })
  public transparent = false;

  /**
   * A `TemplateResult` that will be used
   * to render the updated internal template.
   * @return Render template
   */
  protected render (): TemplateResult {
    return html`<slot></slot>`;
  }
}
