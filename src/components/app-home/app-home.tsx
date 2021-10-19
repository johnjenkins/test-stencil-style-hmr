import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'one.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <h1>Profile page</h1>
        <h2>Something</h2>

        {/* <stencil-route-link url="/profile/stencil">
          <h1>Profile page</h1>
          <h2>Something</h2>
        </stencil-route-link> */}
      </div>
    );
  }
}
