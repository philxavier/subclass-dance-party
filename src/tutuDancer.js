//Pseudoclassical Tutu Dancer

class MakeTutuDancer extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="tutu-dancer" src="img/tutu-left.png"></img>');
    this.setPosition(top, left);
    this.animate();

  }
  step () {

    super.step();

    if (this.$node.attr('src') === 'img/tutu-left.png') {
      this.$node.attr('src', 'img/tutu-right.png');
    } else if (this.$node.attr('src') === 'img/tutu-right.png') {
      this.$node.attr('src', 'img/tutu-left.png');
    }
  }

}

window.MakeTutuDancer = MakeTutuDancer;