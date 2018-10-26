//Pseudoclassical Break Dancer

class MakeBreakDancer extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="break-dancer" src="img/break-left.png"></img>');
    this.setPosition(top, left);
    this.animate();

  }
  step () {

    super.step();

    if (this.$node.attr('src') === 'img/break-left.png') {
      this.$node.attr('src', 'img/break-right.png');
    } else if (this.$node.attr('src') === 'img/break-right.png') {
      this.$node.attr('src', 'img/break-up.png');
    } else {
      this.$node.attr('src', 'img/break-left.png');
    }
  }

}

window.MakeBreakDancer = MakeBreakDancer;
