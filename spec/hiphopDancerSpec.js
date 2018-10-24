describe('hiphopDancer', function() {

  var hiphopDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hiphopDancer = new MakeHipHopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hiphopDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that makes it move', function() {
    sinon.spy(hiphopDancer.$node, 'animate');
    hiphopDancer.animate();
    expect(hiphopDancer.$node.animate.called).to.be.true;
  });

  it('should have a lineup function that makes it lineup', function() {
    sinon.spy(hiphopDancer.$node, 'css');
    hiphopDancer.lineUp();
    expect(hiphopDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hiphopDancer, 'step');
      expect(hiphopDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hiphopDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hiphopDancer.step.callCount).to.be.equal(2);
    });
  });
});
