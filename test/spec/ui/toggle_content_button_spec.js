"use strict";

describeComponent('ui/toggle_content_button', function() {
  beforeEach(function () {
    setupComponent(readFixtures('ui/toggle_content_button.html'))
  });

  it('starts with the content hidden', function() {
    expect(this.component.select('contentSelector')).not.toBeVisible();
  });

  it('shows the content when clicked', function() {
    this.component.select('buttonSelector').click();
    expect(this.component.select('contentSelector')).toBeVisible();
  });

  it('hides the content when clicked again', function() {
    this.component.select('buttonSelector').click();
    expect(this.component.select('contentSelector')).toBeVisible();
    this.component.select('buttonSelector').click();
    expect(this.component.select('contentSelector')).not.toBeVisible();
  });

  it('triggers the event contentToggled when toggled', function () {
    var eventSpy = spyOnEvent(this.component.node, 'contentToggled');
    this.component.select('buttonSelector').click();
    expect(eventSpy).toHaveBeenTriggeredOn(this.component.node);
  });
});