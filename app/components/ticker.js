import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class TickerComponent extends Component {
  @tracked data = null;
}
