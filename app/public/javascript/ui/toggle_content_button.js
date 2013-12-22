define(['flight/lib/component'], function (defineComponent) {
  return defineComponent(button);

  function button() {
    this.defaultAttrs({
      buttonSelector: 'button',
      contentSelector: 'div.content',
    });

    this.onClick = function() {
      this.select('contentSelector').toggle();
      this.trigger('contentToggled');
    }

    this.after('initialize', function() {
      this.select('buttonSelector').on('click', this.onClick.bind(this));
    });
  }
});