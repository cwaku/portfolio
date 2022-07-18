/* eslint-disable */

// Todo: Update update legacy code (contextAPI)

import React from 'react';
import PropTypes from 'prop-types';
import SmoothScrollbar from 'smooth-scrollbar';

export const ScrollbarContext = React.createContext(null);

export default class Scrollbar extends React.Component {
    static propTypes = {
      damping: PropTypes.number,
      thumbMinSize: PropTypes.number,
      syncCallbacks: PropTypes.bool,
      renderByPixels: PropTypes.bool,
      alwaysShowTracks: PropTypes.bool,
      continuousScrolling: PropTypes.bool,
      wheelEventTarget: PropTypes.element,
      plugins: PropTypes.object,
      onScroll: PropTypes.func,
      children: PropTypes.node,
    }; // Todo: Find a better way to do this (to have PropTypes outside of the class)

    static childContextTypes = {
      getScrollbar: PropTypes.func,
    };

    constructor(props) {
      super(props);

      this.callbacks = [];
    }

    getChildContext() {
      return {
        getScrollbar: (cb) => {
          if (typeof cb !== 'function') return;

          if (this.scrollbar) setTimeout(() => cb(this.scrollbar));
          else this.callbacks.push(cb);
        },
      };
    }

    componentDidMount() {
      this.scrollbar = SmoothScrollbar.init(this.$container, this.props);

      this.callbacks.forEach((cb) => {
        requestAnimationFrame(() => cb(this.scrollbar));
      });

      this.scrollbar.addListener(this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      if (this.scrollbar) {
        this.scrollbar.destroy();
      }
    }

    componentDidUpdate(nextProps) {
      Object.keys(nextProps).forEach((key) => {
        if (!key in this.scrollbar.options) {
          return;
        } //Todo:  componentWillReceiveProps is deprecated, use componentWillUpdate instead

        if (key === 'plugins') {
          Object.keys(nextProps.plugins).forEach((pluginName) => {
            this.scrollbar.updatePluginOptions(pluginName, nextProps.plugins[pluginName]);
          });
        } else {
          this.scrollbar.options[key] = nextProps[key];
        }
      });

      this.scrollbar && this.scrollbar.update();
    }

    // componentDidUpdate() {
    //   this.scrollbar && this.scrollbar.update();
    // }

    handleScroll(status) {
      if (this.props.onScroll) {
        this.props.onScroll(status, this.scrollbar);
      } // Todo: Use object destructuring to get the status
    }

    render() {
      const {
        damping,
        thumbMinSize,
        syncCallbacks,
        renderByPixels,
        alwaysShowTracks,
        continuousScrolling,
        wheelEventTarget,
        plugins,

        onScroll,
        children,
        ...others
      } = this.props;

      return (
        <section data-scrollbar ref={(element) => this.$container = element} {...others}>
          <div>{children}</div>
        </section>
      );
    }
}
