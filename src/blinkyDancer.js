class MakeBlinkyDancer extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    super(top, left, timeBetweenSteps);
  }
  step () {

    super.step();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  }

}



window.MakeBlinkyDancer = MakeBlinkyDancer;