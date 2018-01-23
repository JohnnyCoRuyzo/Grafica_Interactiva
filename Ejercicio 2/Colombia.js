(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Vichada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AoCIdQgKgCgKgFQg4kfAMj8QACgbgIgrQARACgGgWIgBgKIAAgKQAKgFAIgHIAEgFIAGgFQACgDAAgFIAAgKQAWgRAYgMQAqgWAMgxQALgJASgEQAGgCAFgFQAFgFADgGQACgEAAgFQAogPAvgNIArgMQAFgUAKgNQAWgjAYgfIAJgLQANgLAagEIABgFQBRgNBXgLQALgBAKgFQCwgkCaAQQAKgKAMgFQANgFAPAAQAegJAegBQAygCAyAVQAFABAFAAQAAAZgJAWIgNAgQgDAGgFAFIAAAeQAAAKgCAKQgDAKAAAKQAAAFAFAFIgUAeIgeAoIgKAKQgGAWAPADQABAAAAAFIAAAKQAAAFACAEQADAGAFAFQgKAtgCAuQAAARACA+QAYAWAMAkQARA4gXA3Qg5AhhngNQgUAPgWALQgSAJgKAPQgoAPgyAHQgUADgUAFQhaA5iVgbQgSAXggAGQgvAJgNAqQgLAJgSADQgVADgSAJQgCABAAAFQgWADgHAZQgGAWgPAUIgKAKQAAAUgJANQgIAKgIAOQgFAIgKAFQgeAugjgpIgFAFQgUAWgnAAQgSAAgXgFg");
	this.shape.setTransform(58.5,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AGfoXQAegJAegBQAygCAzAVQAEABAFAAQAAAZgJAWQgFANgIATQgDAGgFAFQAAAPAAAPQAAAKgCAKQgDAKAAAKQAAAFAFAFQgKAPgKAPQgPAUgPAUQgFAFgFAFQgGAWAPADQABAAAAAFQAAAFAAAFQAAAFACAEQADAGAFAFQgKAtgCAuQAAARACA+QAYAWAMAkQARA4gXA3Qg5AhhngNQgUAPgWALQgSAJgKAPQgoAPgyAHQgUADgUAFQhaA5iVgbQgSAXggAGQgvAJgNAqQgLAJgTADQgUADgSAJQgCABAAAFQgWADgHAZQgGAWgQAUQgEAFgFAFQAAAUgKANQgHAKgIAOQgFAIgKAFQgeAugjgpIgFAFQgdAghHgPQgKgCgKgFQg4kfAMj8QABgbgHgrQAQACgFgWQgBgFAAgFQAAgFAAgFQAKgFAHgHQADgDACgCQADgDACgCQADgDAAgFQAAgFAAgFQAWgRAXgMQArgWAMgxQALgJASgEQAGgCAFgFQAFgFADgGQACgEAAgFQAogPAvgNQATgFAYgHQAFgUAKgNQAWgjAXgfQAFgGAFgFQANgLAbgEQAAAAAAgFQBRgNBYgLQAKgBAKgFQCwgkCaAQQAKgKAMgFQANgFAPAAg");
	this.shape_1.setTransform(58.5,54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoCIdQgKgCgKgFQg4kfAMj8QACgbgIgrQARACgGgWIgBgKIAAgKQAKgFAIgHIAEgFIAGgFQACgDAAgFIAAgKQAWgRAYgMQAqgWAMgxQALgJASgEQAGgCAFgFQAFgFADgGQACgEAAgFQAogPAvgNIArgMQAFgUAKgNQAWgjAYgfIAJgLQANgLAagEIABgFQBRgNBXgLQALgBAKgFQCwgkCaAQQAKgKAMgFQANgFAPAAQAegJAegBQAygCAyAVQAFABAFAAQAAAZgJAWIgNAgQgDAGgFAFIAAAeQAAAKgCAKQgDAKAAAKQAAAFAFAFIgUAeIgeAoIgKAKQgGAWAPADQABAAAAAFIAAAKQAAAFACAEQADAGAFAFQgKAtgCAuQAAARACA+QAYAWAMAkQARA4gXA3Qg5AhhngNQgUAPgWALQgSAJgKAPQgoAPgyAHQgUADgUAFQhaA5iVgbQgSAXggAGQgvAJgNAqQgLAJgSADQgVADgSAJQgCABAAAFQgWADgHAZQgGAWgPAUIgKAKQAAAUgJANQgIAKgIAOQgFAIgKAFQgeAugjgpIgFAFQgUAWgnAAQgSAAgXgFg");
	this.shape_2.setTransform(58.5,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AoCIdQgKgCgKgFQg4kfAMj8QACgbgIgrQARACgGgWIgBgKIAAgKQAKgFAIgHIAEgFIAGgFQACgDAAgFIAAgKQAWgRAYgMQAqgWAMgxQALgJASgEQAGgCAFgFQAFgFADgGQACgEAAgFQAogPAvgNIArgMQAFgUAKgNQAWgjAYgfIAJgLQANgLAagEIABgFQBRgNBXgLQALgBAKgFQCwgkCaAQQAKgKAMgFQANgFAPAAQAegJAegBQAygCAyAVQAFABAFAAQAAAZgJAWIgNAgQgDAGgFAFIAAAeQAAAKgCAKQgDAKAAAKQAAAFAFAFIgUAeIgeAoIgKAKQgGAWAPADQABAAAAAFIAAAKQAAAFACAEQADAGAFAFQgKAtgCAuQAAARACA+QAYAWAMAkQARA4gXA3Qg5AhhngNQgUAPgWALQgSAJgKAPQgoAPgyAHQgUADgUAFQhaA5iVgbQgSAXggAGQgvAJgNAqQgLAJgSADQgVADgSAJQgCABAAAFQgWADgHAZQgGAWgPAUIgKAKQAAAUgJANQgIAKgIAOQgFAIgKAFQgeAugjgpIgFAFQgUAWgnAAQgSAAgXgFg");
	this.shape_3.setTransform(58.5,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,109.2);


(lib.Vaupés = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AFHHQQgQABgHgQQgLgagQAVQgFgFgEABQgaAHgPgNQgYgkg3AlIgLAJQgBgUACgHQAIgZgdgIQgCgbAFgQQAKgfgNgQQAFAAACgDQADgCABgFQAEgKAFgKQhHATgngnQhQAAgxgeQAAgFgDgDIgCgCQAOgUgTgKQgQgdgngPQgIgDgRgDQgFgXgOAJQgUANgLgTIhkgKQg0gngngxQgOgRgPgOQgCgbAQgMQAQgLAKgUQAkgYAZghQAMgPAbACQAAgFgDgDIgCgDQgCgQARgDQgFgFABgCQAPgbgVgQQANgRgFghQgFglARgNQAFgXAGABQAfABgCAfQAFAAACgDIAFgDQASgJAUgFQAPgeAhgNQARgHAPgKQAFAFAEgBQAZgFgLgPIAIgCQA6AKAdgQQACgBAAgFQAFAFAEgBIAygEQAeguAhArQACADAFAAQAWAlAmANQAKADAMACIAcAPQANA3gEBBQgBAIACAqIAKADIAAAHIARgBIABAAQA/ARBtAEQAKAUAMATQAKAPgMAaQg3AdhBgTQgiAVgtANQgBABAAAFQglADggALQgBABAAAFQgUBZAIBGQABAQgJAiQAKAFAGAIQAOARAKAUQAfATAwAGIABAFQAgANARAgQANAXggAMIAAAKQAAAFABAAQAPAEgGAVQATABAGALQAKASAFAUQAAAPgIAHQgNAOgJAAQgGAAgEgGg");
	this.shape.setTransform(46.3,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AD3jDQAAgDAAgEQgFgBgFgCQgCgqABgIQAEhBgNg3QgbgOgBgBQgMgCgKgDQgmgNgWglQgFAAgCgDQghgrgeAuQgbADgXABQgEABgFgFQAAAFgCABQgdAQg6gKQgEABgEABQALAPgZAFQgEABgFgFQgPAKgRAHQghANgPAeQgUAFgSAJQgCABgDACQgCADgFAAQACgfgfgBQgGgBgFAXQgRANAFAlQAFAhgNARQAVAQgPAbQgBACAFAFQgRADACAQQAAABACACQADADAAAFQgbgCgMAPQgZAhgkAYQgKAUgQALQgQAMACAbQAPAOAOARQAnAxA0AnQAyAFAyAFQALATAUgNQAOgJAFAXQARADAIADQAnAPAQAdQATAKgOAUIACACQADADAAAFQAxAeBQAAQAnAnBHgTQgFAKgEAKQgBAFgDACQgCADgFAAQANAQgKAfQgFAQACAbQAdAIgIAZQgCAHABAUQAFgFAGgEQA3glAYAkQAPANAagHQAEgBAFAFQAQgVALAaQAHAQAQgBQALAPAVgXQAIgHAAgPQgFgUgKgSQgGgLgTgBQAGgVgPgEQgBAAAAgFQAAgFAAgFQAggMgNgXQgRgggggNQAAgFgBAAQgwgGgfgTQgKgUgOgRQgGgIgKgFQAJgigBgQQgIhGAUhZQAAgFABgBQAggLAlgDQAAgFABgBQAtgNAigVQBBATA3gdQAMgagKgPQgMgTgKgUQhtgEg/gRIgBAAQgIAAgJABg");
	this.shape_1.setTransform(46.3,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFHHQQgQABgHgQQgLgagQAVQgFgFgEABQgaAHgPgNQgYgkg3AlIgLAJQgBgUACgHQAIgZgdgIQgCgbAFgQQAKgfgNgQQAFAAACgDQADgCABgFQAEgKAFgKQhHATgngnQhQAAgxgeQAAgFgDgDIgCgCQAOgUgTgKQgQgdgngPQgIgDgRgDQgFgXgOAJQgUANgLgTIhkgKQg0gngngxQgOgRgPgOQgCgbAQgMQAQgLAKgUQAkgYAZghQAMgPAbACQAAgFgDgDIgCgDQgCgQARgDQgFgFABgCQAPgbgVgQQANgRgFghQgFglARgNQAFgXAGABQAfABgCAfQAFAAACgDIAFgDQASgJAUgFQAPgeAhgNQARgHAPgKQAFAFAEgBQAZgFgLgPIAIgCQA6AKAdgQQACgBAAgFQAFAFAEgBIAygEQAeguAhArQACADAFAAQAWAlAmANQAKADAMACIAcAPQANA3gEBBQgBAIACAqIAKADIAAAHIARgBIABAAQA/ARBtAEQAKAUAMATQAKAPgMAaQg3AdhBgTQgiAVgtANQgBABAAAFQglADggALQgBABAAAFQgUBZAIBGQABAQgJAiQAKAFAGAIQAOARAKAUQAfATAwAGIABAFQAgANARAgQANAXggAMIAAAKQAAAFABAAQAPAEgGAVQATABAGALQAKASAFAUQAAAPgIAHQgNAOgJAAQgGAAgEgGg");
	this.shape_2.setTransform(46.3,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AFHHQQgQABgHgQQgLgagQAVQgFgFgEABQgaAHgPgNQgYgkg3AlIgLAJQgBgUACgHQAIgZgdgIQgCgbAFgQQAKgfgNgQQAFAAACgDQADgCABgFQAEgKAFgKQhHATgngnQhQAAgxgeQAAgFgDgDIgCgCQAOgUgTgKQgQgdgngPQgIgDgRgDQgFgXgOAJQgUANgLgTIhkgKQg0gngngxQgOgRgPgOQgCgbAQgMQAQgLAKgUQAkgYAZghQAMgPAbACQAAgFgDgDIgCgDQgCgQARgDQgFgFABgCQAPgbgVgQQANgRgFghQgFglARgNQAFgXAGABQAfABgCAfQAFAAACgDIAFgDQASgJAUgFQAPgeAhgNQARgHAPgKQAFAFAEgBQAZgFgLgPIAIgCQA6AKAdgQQACgBAAgFQAFAFAEgBIAygEQAeguAhArQACADAFAAQAWAlAmANQAKADAMACIAcAPQANA3gEBBQgBAIACAqIAKADIAAAHIARgBIABAAQA/ARBtAEQAKAUAMATQAKAPgMAaQg3AdhBgTQgiAVgtANQgBABAAAFQglADggALQgBABAAAFQgUBZAIBGQABAQgJAiQAKAFAGAIQAOARAKAUQAfATAwAGIABAFQAgANARAgQANAXggAMIAAAKQAAAFABAAQAPAEgGAVQATABAGALQAKASAFAUQAAAPgIAHQgNAOgJAAQgGAAgEgGg");
	this.shape_3.setTransform(46.3,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,94);


(lib.Valle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AhaEkIgJgLQhZAMgVggQgKgFgCACQgNAQgFgXQgKgFgIgHQgHgIgFgKQgGgVAQgCQAKgCAKgFQAFgoAagSQAJgHAKgFIAAgKIAAgKIAAgUQAWgIAJgVIAJgVQgeACgngHQgBAAAAgFIgFgFQALgDgGgVQglANgXgNQAAgPAGgMQAEgIAKgFQAogPAoAPQAdAaAzAEQAnAfBGgVQALgYATgQIAKgKIgjgsQgFgGAAgKQAohkBIhDQAIgIAKgFQA3AIArBAQACADAAAFQgSAUAKAXQADAHgFAKQAPAKAHAUQADAKAFAKQgBAoAIAcQADAHAKAFIAAAKQAAAFgCAEQgDAGgFAEIgTALIgLAJQgeBQgRBbQgEATgJAKQgZAMgXgPQgCgCAAgFQhQgUgUAoQgdA/g8gNQgMASgJAAQgFAAgFgHg");
	this.shape.setTransform(28,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ACMkqQA3AIArBAQACADAAAFQgRAUAJAXQADAHgFAKQAPAKAHAUQADAKAFAKQgBAoAJAcQACAHAKAFQAAAFAAAFQAAAFgCAEQgDAGgFAEQgKAFgJAGQgGAEgFAFQgeBQgRBbQgDATgKAKQgZAMgWgPQgDgCAAgFQhQgUgUAoQgdA/g8gNQgTAcgMgRQgEgGgFgFQhZAMgVggQgKgFgCACQgNAQgFgXQgKgFgIgHQgHgIgFgKQgGgVAPgCQALgCAKgFQAEgoAbgSQAJgHAKgFQAAgFAAgFQAAgFAAgFQAAgKAAgKQAVgIAJgVQAFgLAFgKQgeACgngHQgBAAAAgFIgFgFQALgDgGgVQgmANgWgNQAAgPAGgMQAEgIAKgFQAogPAoAPQAdAaAzAEQAnAfBGgVQALgYASgQQAGgFAFgFQgRgWgSgWQgFgGAAgKQAohkBIhDQAIgIAKgFg");
	this.shape_1.setTransform(28,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaEkIgJgLQhZAMgVggQgKgFgCACQgNAQgFgXQgKgFgIgHQgHgIgFgKQgGgVAQgCQAKgCAKgFQAFgoAagSQAJgHAKgFIAAgKIAAgKIAAgUQAWgIAJgVIAJgVQgeACgngHQgBAAAAgFIgFgFQALgDgGgVQglANgXgNQAAgPAGgMQAEgIAKgFQAogPAoAPQAdAaAzAEQAnAfBGgVQALgYATgQIAKgKIgjgsQgFgGAAgKQAohkBIhDQAIgIAKgFQA3AIArBAQACADAAAFQgSAUAKAXQADAHgFAKQAPAKAHAUQADAKAFAKQgBAoAIAcQADAHAKAFIAAAKQAAAFgCAEQgDAGgFAEIgTALIgLAJQgeBQgRBbQgEATgJAKQgZAMgXgPQgCgCAAgFQhQgUgUAoQgdA/g8gNQgMASgJAAQgFAAgFgHg");
	this.shape_2.setTransform(28,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhaEkIgJgLQhZAMgVggQgKgFgCACQgNAQgFgXQgKgFgIgHQgHgIgFgKQgGgVAQgCQAKgCAKgFQAFgoAagSQAJgHAKgFIAAgKIAAgKIAAgUQAWgIAJgVIAJgVQgeACgngHQgBAAAAgFIgFgFQALgDgGgVQglANgXgNQAAgPAGgMQAEgIAKgFQAogPAoAPQAdAaAzAEQAnAfBGgVQALgYATgQIAKgKIgjgsQgFgGAAgKQAohkBIhDQAIgIAKgFQA3AIArBAQACADAAAFQgSAUAKAXQADAHgFAKQAPAKAHAUQADAKAFAKQgBAoAIAcQADAHAKAFIAAAKQAAAFgCAEQgDAGgFAEIgTALIgLAJQgeBQgRBbQgEATgJAKQgZAMgXgPQgCgCAAgFQhQgUgUAoQgdA/g8gNQgMASgJAAQgFAAgFgHg");
	this.shape_3.setTransform(28,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,59.7);


(lib.Tolima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AjwFcQgPhtAohnQAFgNAAgPQATgUAegMQAGgDAFgFQgCgbAGgPQAGgNAAgOQAdhLAxg4QAHgJAFgKIAahvQAEgOAAgPQAUgFAMgKQAHgFAKAAQAQgmA2gCQAEgOAiASQACABAAAFQAFCWgNBlQgCAOAAAPQAFAKAHAIQAIAHAKAFQAwALAgATQADAhADANQAAACgGAVIhkCrIgKATQglACgIgfQAAgBgFAAIgygKIgUAUIgngKQgZAUgbASQgDACgFAAIgKAUIgKAUQgLAJgSAGQgBAAAAAFQglAJgXAVIgogKg");
	this.shape.setTransform(24.5,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ABjlfQAEgOAiASQACABAAAFQAFCWgNBlQgCAOAAAPQAFAKAHAIQAIAHAKAFQAwALAgATQADAhADANQAAACgGAVQgyBWgyBVQgFAJgFAKQglACgIgfQAAgBgFAAQgZgFgZgFQgKAKgKAKQgTgFgUgFQgZAUgbASQgDACgFAAQgFAKgFAKQgFAKgFAKQgLAJgSAGQgBAAAAAFQglAJgXAVQgUgFgUgFQgPhtAohnQAFgNAAgPQATgUAegMQAGgDAFgFQgCgbAGgPQAGgNAAgOQAdhLAxg4QAHgJAFgKQAJgnARhIQAEgOAAgPQAUgFAMgKQAHgFAKAAQAQgmA2gCg");
	this.shape_1.setTransform(24.5,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjwFcQgPhtAohnQAFgNAAgPQATgUAegMQAGgDAFgFQgCgbAGgPQAGgNAAgOQAdhLAxg4QAHgJAFgKIAahvQAEgOAAgPQAUgFAMgKQAHgFAKAAQAQgmA2gCQAEgOAiASQACABAAAFQAFCWgNBlQgCAOAAAPQAFAKAHAIQAIAHAKAFQAwALAgATQADAhADANQAAACgGAVIhkCrIgKATQglACgIgfQAAgBgFAAIgygKIgUAUIgngKQgZAUgbASQgDACgFAAIgKAUIgKAUQgLAJgSAGQgBAAAAAFQglAJgXAVIgogKg");
	this.shape_2.setTransform(24.5,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AjwFcQgPhtAohnQAFgNAAgPQATgUAegMQAGgDAFgFQgCgbAGgPQAGgNAAgOQAdhLAxg4QAHgJAFgKIAahvQAEgOAAgPQAUgFAMgKQAHgFAKAAQAQgmA2gCQAEgOAiASQACABAAAFQAFCWgNBlQgCAOAAAPQAFAKAHAIQAIAHAKAFQAwALAgATQADAhADANQAAACgGAVIhkCrIgKATQglACgIgfQAAgBgFAAIgygKIgUAUIgngKQgZAUgbASQgDACgFAAIgKAUIgKAUQgLAJgSAGQgBAAAAAFQglAJgXAVIgogKg");
	this.shape_3.setTransform(24.5,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,71.6);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.Colombia = new cjs.Text("COLOMBIA", "bold 72px 'Times New Roman'");
	this.Colombia.name = "Colombia";
	this.Colombia.textAlign = "center";
	this.Colombia.lineHeight = 82;
	this.Colombia.lineWidth = 432;
	this.Colombia.parent = this;
	this.Colombia.setTransform(191.8,1.3,0.653,0.615);

	this.Colombia_1 = new cjs.Text("\n La República de Colombia es un país\n soberano situado en la región\n noroccidental de América del Sur\n que se encuentra constituido en un\n estado unitario, social y democrático\n de derecho cuya forma de gobierno\n es presidencialista. Es una república\n que está organizada políticamente\n en 32 departamentos\n descentralizados y el Distrito capital\n de Bogotá, sede del gobierno\n nacional.", "bold 34px 'Times New Roman'");
	this.Colombia_1.name = "Colombia_1";
	this.Colombia_1.textAlign = "center";
	this.Colombia_1.lineHeight = 40;
	this.Colombia_1.lineWidth = 624;
	this.Colombia_1.parent = this;
	this.Colombia_1.setTransform(191.7,82.4,0.611,0.615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Colombia_1},{t:this.Colombia}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,383.5,424), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(3.7,1,1).p("A8oAAMA5RAAA");
	this.shape.setTransform(224.9,165.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(34,1,1).p("EgjnAivIAAhuMAAAhMpMAp3AAAEAjoAivIAAI6MhHPAAAIAAo6gEAGZgroIdPAAMAAABMpIAABu");
	this.shape_1.setTransform(228,306.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(7.4,1,1).p("EAFWgqNQAAAMgIAIQgIAIgLAAQgMAAgIgIQgIgIAAgMQAAgMAIgIQAGgGAJgCQACAAADAAQACAAACAAQAJACAGAGQAIAIAAAMgEgFVAmiIIUAAIAAEIIoUAAg");
	this.shape_2.setTransform(236.9,300.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF9900").ss(0.1,1,1).p("AbAFiIAABiMg1/AAAIAAhiIAAslMA1tAAA");
	this.shape_3.setTransform(224.6,103.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAAAAIAAAAIABAAg");
	this.shape_4.setTransform(186.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgjnAroIAAo5IAAhuMBHPAAAIAABuMhHPAAAMBHPAAAIAAI5gEgD8AprIIVAAIAAkIIoVAAIIVAAIAAEIIoVAAIAAkIIAAEIgEAjoAivgEAGAgq4QgHgIAAgMQAAgLAHgJQAHgGAJgBIAEAAIAFAAQAJABAGAGQAIAJAAALQAAAMgIAIQgIAIgMAAQgLAAgJgIg");
	this.shape_5.setTransform(228,306.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("A6/HFIAAhhIAAsmIAAMmIgBAAIAAsoIABAAIAAACMA1tAAAIAEAEQAHADAHgBIABAAIAAMgIgBAAIAABhg");
	this.shape_6.setTransform(224.6,103.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgjnAmVMAAAhMoMAp3AAAQgJABgHAGQgHAJAAALQAAAMAHAIQAJAIALAAQAMAAAIgIQAIgIAAgMQAAgLgIgJQgGgGgJgBIdPAAMAAABMogAcJwtMg5QAAAgA7h07IABAAIAABhMA1+AAAIAAhhIABAAIAAshIgBAAQgHACgGgEIgEgDMg1tAAAIAAgDIgBAAg");
	this.shape_7.setTransform(228,272.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-16.9,0,489.9,603.1), null);


(lib.Sucre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("ABzDnQAHgbgbACIAAgFQhGgEg7gGQghgRACg1IABgUQAKgPAOgHQAMgGgGgWQgdhBhGgbQgUgIgLgTQgMgDAUgSQAIgHgGgWQgNgqgCgwQAAgKAFgKQAUgMAbAiQADADAAAFQgPBBBLgZQAiAfAtATQALBPAsAtQAYAaApAJQAOAuAKA+QADAPgHAlQgKAVgeAAIgKgBg");
	this.shape.setTransform(17,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AikjkQAUgMAbAiQADADAAAFQgPBBBLgZQAiAfAtATQALBPAsAtQAYAaApAJQAOAuAKA+QADAPgHAlQgLAYgngEQAHgbgbACIAAgFQhGgEg7gGQghgRACg1QABgKAAgKQAKgPAOgHQAMgGgGgWQgdhBhGgbQgUgIgLgTQgMgDAUgSQAIgHgGgWQgNgqgCgwQAAgKAFgKg");
	this.shape_1.setTransform(17,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABzDnQAHgbgbACIAAgFQhGgEg7gGQghgRACg1IABgUQAKgPAOgHQAMgGgGgWQgdhBhGgbQgUgIgLgTQgMgDAUgSQAIgHgGgWQgNgqgCgwQAAgKAFgKQAUgMAbAiQADADAAAFQgPBBBLgZQAiAfAtATQALBPAsAtQAYAaApAJQAOAuAKA+QADAPgHAlQgKAVgeAAIgKgBg");
	this.shape_2.setTransform(17,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABzDnQAHgbgbACIAAgFQhGgEg7gGQghgRACg1IABgUQAKgPAOgHQAMgGgGgWQgdhBhGgbQgUgIgLgTQgMgDAUgSQAIgHgGgWQgNgqgCgwQAAgKAFgKQAUgMAbAiQADADAAAFQgPBBBLgZQAiAfAtATQALBPAsAtQAYAaApAJQAOAuAKA+QADAPgHAlQgKAVgeAAIgKgBg");
	this.shape_3.setTransform(17,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,46.4);


(lib.Santander = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("Ai/EYQgcgMgOgbQgDgGgFgFQgsgQgagiQgQgRADgJQAHgPAQABQgHggAKgOQAHgJAAgPQA1gvAygxQAWgXAjgKQAGgzgEgfIgMgcQgCgbAHgQQAFgMAAgPQATgLAIgbQADgMAKgKQAmgOAeAxQACAFAKAAQAcALAfAJIAUgUQAhgMAvACQAKAZAUAQIAKAJQAFAjAJAbQAGASAAAUIALATIAJALQArARAvANQANAggKAtQgCAMgBAUQgsABgkgBQACAcAFAWQADAPAAAPQgIAVgUAMQgLAHgBAUQggADgNAYQgFAIgKAFQglgMguAaQgCABgFgFQgSgugzAaQgKAFgBAGQgCAUgRgBQAAAPgGAMQgEAIgKAFQgcANgcAAQglAAglgXg");
	this.shape.setTransform(32.5,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AhbkrQAmgOAeAxQACAFAKAAQAcALAfAJQAKgKAKgKQAhgMAvACQAKAZAUAQQAFAEAFAFQAFAjAJAbQAGASAAAUQAFAKAGAJQAEAGAFAFQArARAvANQANAggKAtQgCAMgBAUQgsABgkgBQACAcAFAWQADAPAAAPQgIAVgUAMQgLAHgBAUQggADgNAYQgFAIgKAFQglgMguAaQgCABgFgFQgSgugzAaQgKAFgBAGQgCAUgRgBQAAAPgGAMQgEAIgKAFQhBAfhBgpQgcgMgOgbQgDgGgFgFQgsgQgagiQgQgRADgJQAHgPAQABQgHggAKgOQAHgJAAgPQA1gvAygxQAWgXAjgKQAGgzgEgfQAAgBgMgbQgCgbAHgQQAFgMAAgPQATgLAIgbQADgMAKgKg");
	this.shape_1.setTransform(32.5,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai/EYQgcgMgOgbQgDgGgFgFQgsgQgagiQgQgRADgJQAHgPAQABQgHggAKgOQAHgJAAgPQA1gvAygxQAWgXAjgKQAGgzgEgfIgMgcQgCgbAHgQQAFgMAAgPQATgLAIgbQADgMAKgKQAmgOAeAxQACAFAKAAQAcALAfAJIAUgUQAhgMAvACQAKAZAUAQIAKAJQAFAjAJAbQAGASAAAUIALATIAJALQArARAvANQANAggKAtQgCAMgBAUQgsABgkgBQACAcAFAWQADAPAAAPQgIAVgUAMQgLAHgBAUQggADgNAYQgFAIgKAFQglgMguAaQgCABgFgFQgSgugzAaQgKAFgBAGQgCAUgRgBQAAAPgGAMQgEAIgKAFQgcANgcAAQglAAglgXg");
	this.shape_2.setTransform(32.5,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ai/EYQgcgMgOgbQgDgGgFgFQgsgQgagiQgQgRADgJQAHgPAQABQgHggAKgOQAHgJAAgPQA1gvAygxQAWgXAjgKQAGgzgEgfIgMgcQgCgbAHgQQAFgMAAgPQATgLAIgbQADgMAKgKQAmgOAeAxQACAFAKAAQAcALAfAJIAUgUQAhgMAvACQAKAZAUAQIAKAJQAFAjAJAbQAGASAAAUIALATIAJALQArARAvANQANAggKAtQgCAMgBAUQgsABgkgBQACAcAFAWQADAPAAAPQgIAVgUAMQgLAHgBAUQggADgNAYQgFAIgKAFQglgMguAaQgCABgFgFQgSgugzAaQgKAFgBAGQgCAUgRgBQAAAPgGAMQgEAIgKAFQgcANgcAAQglAAglgXg");
	this.shape_3.setTransform(32.5,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.1,60.7);


(lib.Risaralda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("AAFBoQgVgcgZgYQgNgNgKgPQgKgFgKgCQgTgEgLgJQAHgUgOgFQgPgGACgcQAPgKANgMQAPgPAbgDQAtgpAOAxQABACAJAAQgLANABAbIABA7IAWATQAKAIARADQAzAJAnAVQgdApgwAAQgYAAgdgLg");
	this.shape.setTransform(13.5,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AhAhfQAtgpAOAxQABACAJAAQgLANABAbQABAeAAAdQAKAJAMAKQAKAIARADQAzAJAnAVQgsA9hWgfQgVgcgZgYQgNgNgKgPQgKgFgKgCQgTgEgLgJQAHgUgOgFQgPgGACgcQAPgKANgMQAPgPAbgDg");
	this.shape_1.setTransform(13.5,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFBoQgVgcgZgYQgNgNgKgPQgKgFgKgCQgTgEgLgJQAHgUgOgFQgPgGACgcQAPgKANgMQAPgPAbgDQAtgpAOAxQABACAJAAQgLANABAbIABA7IAWATQAKAIARADQAzAJAnAVQgdApgwAAQgYAAgdgLg");
	this.shape_2.setTransform(13.5,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAFBoQgVgcgZgYQgNgNgKgPQgKgFgKgCQgTgEgLgJQAHgUgOgFQgPgGACgcQAPgKANgMQAPgPAbgDQAtgpAOAxQABACAJAAQgLANABAbIABA7IAWATQAKAIARADQAzAJAnAVQgdApgwAAQgYAAgdgLg");
	this.shape_3.setTransform(13.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,22.9);


(lib.Quindio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AglBVIgEgHQgLgXgHgbQAFgBADgCQACgCgBgFQgNgjgQgiIAAgKQAAgGACAAIAwgOQA2gGA3AAIAAAGQgFAAgDACIgEADQghATgZAZIAAAKIAAAKIAAAeQgFAAgCACIgEAHQgNAegPAeQgFAAgDgCg");
	this.shape.setTransform(8,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AgdhSQA2gFA3AAIAAAFQgFAAgCADQgDACgCABQgiATgYAZQAAAFAAAFQAAAFAAAFQAAAPAAAPQgFAAgCACQgDADgBAEQgNAfgPAeQgFAAgDgDQgCgCgCgEQgLgYgHgbQAFAAACgDQADgCgCgFQgNgjgPgjQAAgFAAgFQAAgFABAAQAagHAXgIg");
	this.shape_1.setTransform(8,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBVIgEgHQgLgXgHgbQAFgBADgCQACgCgBgFQgNgjgQgiIAAgKQAAgGACAAIAwgOQA2gGA3AAIAAAGQgFAAgDACIgEADQghATgZAZIAAAKIAAAKIAAAeQgFAAgCACIgEAHQgNAegPAeQgFAAgDgCg");
	this.shape_2.setTransform(8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AglBVIgEgHQgLgXgHgbQAFgBADgCQACgCgBgFQgNgjgQgiIAAgKQAAgGACAAIAwgOQA2gGA3AAIAAAGQgFAAgDACIgEADQghATgZAZIAAAKIAAAKIAAAeQgFAAgCACIgEAHQgNAegPAeQgFAAgDgCg");
	this.shape_3.setTransform(8,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,17.5);


(lib.Putumayo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339900").s().p("AGQEJQglghg1gRQgXgbgcgVQgEgCgFAAQhigKirg8IgyAAQg7gfgpgxQhCgog2AoQgYAjguAFIAAAAIgCAAQgsAEhAgYQgVgSgIgfIgBgKQAShKgOhNQgEgYAAgZQAfgTAxgBQAFgKAIgGQAHgEAKAAQAjAGAOBKIABAKQBjAVBbgLQARADAGAQQACAGAFAFQApAOA7gEQAnAdA8ALQAKAoAbAXQADACAAAFQAXgSAUAZQACADAFAAQgHAaAMAJQAFAEAAAKIBGAUQAkAYAMAuQACAFAAAFQA0AVBEgBQArAaAlAiQgpAog2AAIgFAAg");
	this.shape.setTransform(50,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AlnA3IAAAAQAtgFAZgjQA2goBCAoQApAxA7AfQAZAAAZAAQCrA8BiAKQAFAAADACQAeAVAWAbQA1ARAlAhQA5ACArgqQglgigrgaQhEABg0gVQAAgFgCgFQgMgugkgYQgjgKgjgKQAAgKgFgEQgMgJAHgaQgFAAgCgDQgUgZgXASQAAgFgCgCQgcgXgKgoQg8gLgngdQg8AEgogOQgFgFgCgGQgGgQgRgDQhbALhjgVQAAgFgBgFQgOhKgjgGQgKAAgHAEQgIAGgFAKQgxABgfATQAAAZAEAYQAOBNgSBKQAAAFABAFQAHAfAWASQBAAYAsgEQABAAABAAg");
	this.shape_1.setTransform(50,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGQEJQglghg1gRQgXgbgcgVQgEgCgFAAQhigKirg8IgyAAQg7gfgpgxQhCgog2AoQgYAjguAFIAAAAIgCAAQgsAEhAgYQgVgSgIgfIgBgKQAShKgOhNQgEgYAAgZQAfgTAxgBQAFgKAIgGQAHgEAKAAQAjAGAOBKIABAKQBjAVBbgLQARADAGAQQACAGAFAFQApAOA7gEQAnAdA8ALQAKAoAbAXQADACAAAFQAXgSAUAZQACADAFAAQgHAaAMAJQAFAEAAAKIBGAUQAkAYAMAuQACAFAAAFQA0AVBEgBQArAaAlAiQgpAog2AAIgFAAg");
	this.shape_2.setTransform(50,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AGQEJQglghg1gRQgXgbgcgVQgEgCgFAAQhigKirg8IgyAAQg7gfgpgxQhCgog2AoQgYAjguAFIAAAAIgCAAQgsAEhAgYQgVgSgIgfIgBgKQAShKgOhNQgEgYAAgZQAfgTAxgBQAFgKAIgGQAHgEAKAAQAjAGAOBKIABAKQBjAVBbgLQARADAGAQQACAGAFAFQApAOA7gEQAnAdA8ALQAKAoAbAXQADACAAAFQAXgSAUAZQACADAFAAQgHAaAMAJQAFAEAAAKIBGAUQAkAYAMAuQACAFAAAFQA0AVBEgBQArAaAlAiQgpAog2AAIgFAAg");
	this.shape_3.setTransform(50,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,53);


(lib.PlayB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah1iJIAAETIDriKg");
	this.shape.setTransform(43.5,40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkgEgQh4h3AAipQAAioB4h4QB4h4CoAAQCpAAB3B4QB4B4ABCoQgBCph4B3Qh3B4ipABQiogBh4h4gAjBjZIgEAFIgEADQhTBTAAB2QAAB1BTBTQBTBTB1AAQB1AABThTIAEgFIAEgDQBThTAAh1QAAh2hThTQhThTh2ABQh0gBhTBTgAhbiRIDrCLIjrCJg");
	this.shape_1.setTransform(40.9,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AkgEgQh4h3AAipQAAioB4h4QB4h4CoAAQCpAAB3B4QB4B4ABCoQgBCph4B3Qh3B4ipABQiogBh4h4gAjBjZIgEAFIgEADQhTBTAAB2QAAB1BTBTQBTBTB1AAQB1AABThTIAEgFIAEgDQBThTAAh1QAAh2hThTQhThTh2ABQh0gBhTBTgAhbiRIDrCLIjrCJg");
	this.shape_2.setTransform(40.9,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhFhPIAACfICLhQg");
	this.shape_3.setTransform(42.5,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AiqCoQhHhGAAhiQAAhhBHhGQBHhFBjAAQBkAABHBFQBGBGABBhQgBBihGBGQhHBFhkAAQhjAAhHhFgAhyh9IgCACIgCACQgyAxAABEQAABDAyAwQAwAwBGABQBEgBAxgwIADgCIADgCQAwgxAAhDQAAhEgwgwQgygwhFAAQhEAAgyAwgAg1hTICKBPIiKBPg");
	this.shape_4.setTransform(40.9,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AGcAAQAACqh5B4Qh4B4irAAQhHAAg/gWQhXgdhGhFQh4h4AAiqQAAipB4h4QB6h4CpAAQCrAAB4B4QApAoAbAvQAZAsAOAxQAHAaAEAcQADAbAAAcg");
	this.shape_5.setTransform(40.4,40.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiHGFQhWgehGhFQh4h4AAiqQAAipB4h4QB5h4CqAAQCrAAB4B4QApAoAaAvQAaAsAOAxQAHAaAEAbQADAcAAAcQAACqh5B4Qh4B4irAAQhHAAhAgVg");
	this.shape_6.setTransform(40.4,40.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("AkRDTQA/AVBIAAQCqAAB4h4QB5h3AAiqQAAgdgDgbQAEAdAAAfQAACph4B2Qh3B4ioAAQhLAAhBgXg");
	this.shape_7.setTransform(54.3,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.7,81.7);


(lib.NorteDeSantander = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("ABVE4QgPANgZgNIgUgKQgDgggIgWQgJgaAAgeQgTgUgSgWQgHgIgFgKQgwgbgiAKQgHABgVgEQgIgcAEgKQAGgPgCgbQAGgVgCgGQgIgNgQABQAAgjACgjQABgigNgQQgbACgGgVQgCgGgFgFQAPgyABgzQABgSAXgfQATggAzACQAagMAfAZQADACAAAFQAtAAAYAUQgVAcAVAWQAJAJgJALQAbADgCAbQAAAFgFAFQAYAjAhAdQAUASAXASQgIBggWBQQgKAjAeAIQAGAVgJAHQgCACAFAKQAFAAACACIAFAHQADAGAFAFQAYAPAkAFQgCAbAMAMQAKALAAAUQgUAUgXAOQgRALgKAPQgvgDgXgbg");
	this.shape.setTransform(22.5,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AhylRQAagMAfAZQADACAAAFQAtAAAYAUQgVAcAVAWQAJAJgJALQAaADAAAbQgBAFgFAFQAYAjAgAdQAWASAWASQgHBggXBQQgKAjAeAIQAHAVgKAHQgCACAFAKQAFAAADACQACADACAEQADAGAFAFQAZAPAjAFQgCAbAMAMQAKALAAAUQgUAUgXAOQgRALgKAPQgvgDgXgbQgPANgZgNQgKgFgKgFQgDgggIgWQgJgaAAgeQgTgUgSgWQgHgIgFgKQgwgbgiAKQgHABgVgEQgIgcAEgKQAGgPgCgbQAGgVgDgGQgHgNgQABQAAgjACgjQABgigNgQQgbACgGgVQgCgGgFgFQAPgyABgzQABgSAXgfQASggA0ACg");
	this.shape_1.setTransform(22.5,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABVE4QgPANgZgNIgUgKQgDgggIgWQgJgaAAgeQgTgUgSgWQgHgIgFgKQgwgbgiAKQgHABgVgEQgIgcAEgKQAGgPgCgbQAGgVgCgGQgIgNgQABQAAgjACgjQABgigNgQQgbACgGgVQgCgGgFgFQAPgyABgzQABgSAXgfQATggAzACQAagMAfAZQADACAAAFQAtAAAYAUQgVAcAVAWQAJAJgJALQAbADgCAbQAAAFgFAFQAYAjAhAdQAUASAXASQgIBggWBQQgKAjAeAIQAGAVgJAHQgCACAFAKQAFAAACACIAFAHQADAGAFAFQAYAPAkAFQgCAbAMAMQAKALAAAUQgUAUgXAOQgRALgKAPQgvgDgXgbg");
	this.shape_2.setTransform(22.5,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABVE4QgPANgZgNIgUgKQgDgggIgWQgJgaAAgeQgTgUgSgWQgHgIgFgKQgwgbgiAKQgHABgVgEQgIgcAEgKQAGgPgCgbQAGgVgCgGQgIgNgQABQAAgjACgjQABgigNgQQgbACgGgVQgCgGgFgFQAPgyABgzQABgSAXgfQATggAzACQAagMAfAZQADACAAAFQAtAAAYAUQgVAcAVAWQAJAJgJALQAbADgCAbQAAAFgFAFQAYAjAhAdQAUASAXASQgIBggWBQQgKAjAeAIQAGAVgJAHQgCACAFAKQAFAAACACIAFAHQADAGAFAFQAYAPAkAFQgCAbAMAMQAKALAAAUQgUAUgXAOQgRALgKAPQgvgDgXgbg");
	this.shape_3.setTransform(22.5,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,68.4);


(lib.Nariño = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ADBFMQgNgHgPgFQAWgFgRgMQgWgPgNgcQg8gfhHgOQgDAAgDAEIgFgCQgJgHgKgEQgegKgIgGQAAgFgDgCQgCgDgFAAQgQACgEgWQgFAAgCgCIgDgDQgWARACggIgoAAIAAgKQAAgFgCgEQgDgGgFgFQgKAAgIgEIgFgCQgWgRgPANQAHgVgQACQgOADgRgOQgFAAgCgCQgDgDADgDQANgRgugFQgDgRgNgJQgWgPgCgmQA6ggA0ABIAUABIAAgKIAAgKIAAgeQAAgFgCgDIgFgEQgOgRgTgLIAAgKIAAgKIAAg8QAFAAACgDIAGgFQATgYgMgIQADgRAOAFQAXAIAUgkQAAgFADgCQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQAHAOARgQIABgFQAngFAoAAQA2ApAsA0QASAUANAbQAoAPApgIQAJgCAKAFIALATQAQAYANAbQAAAFgDADIgCADQgFAdAAAeQBogDBCAhIAAAKIgBAJIgJA8QgKAAgIAEIgCABQgkgBgEAaQgFAAgCADQgDACABAFQABAbgMANQAKAKAEATQAGAfAKAeQAHAVgPAFQggAIAUAkIAAAKQAAAFgCAFQgDAKgFAKQg6AAgOgIg");
	this.shape.setTransform(35.5,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AialJQAAgFAAAAQAogFAoAAQA2ApAsAzQARAVAOAbQAoAPAqgIQAIgCAKAFQAFAKAGAJQARAXAMAcQAAAFgCACQgDADAAABQgFAdAAAeQBngDBDAhQAAAFAAAFQAAAFAAAEQgFAegFAeQgKAAgIAEIgCABQgkgBgEAaQgFAAgCADQgDACABAFQABAcgMAMQAKAKAEATQAGAfAKAeQAHAWgPADQggAJAUAkQAAAFAAAFQAAAFgBAFQgEAKgFAKQg6AAgNgHQgOgIgPgFQAXgFgSgMQgWgPgNgcQg8gehHgPQgEAAgDAEQgBgBgDAAQgIgIgLgEQgegJgIgHQAAgFgDgCQgCgDgFAAQgQACgEgWQgFAAgDgCIgCgDQgWARACggQgUAAgUAAQAAgFAAgFQAAgFgCgEQgDgGgFgFQgKAAgIgEQgCgBgDgBQgWgRgPANQAGgVgQACQgNADgRgOQgFAAgDgCQgCgDACgDQANgRgtgFQgDgRgNgJQgWgPgCgmQA6ghA0ACQAKABAKAAQAAgFAAgFQAAgFAAgFQAAgPAAgPQAAgFgDgDQgCgCgCgDQgOgQgTgLQAAgFAAgFQAAgFAAgFQAAgeAAgeQAFAAACgDQADgCACgDQAUgYgMgIQADgRAOAFQAXAIAUgkQAAgFACgDQADgCABACQAHAOARgQg");
	this.shape_1.setTransform(35.5,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADBFMQgNgHgPgFQAWgFgRgMQgWgPgNgcQg8gfhHgOQgDAAgDAEIgFgCQgJgHgKgEQgegKgIgGQAAgFgDgCQgCgDgFAAQgQACgEgWQgFAAgCgCIgDgDQgWARACggIgoAAIAAgKQAAgFgCgEQgDgGgFgFQgKAAgIgEIgFgCQgWgRgPANQAHgVgQACQgOADgRgOQgFAAgCgCQgDgDADgDQANgRgugFQgDgRgNgJQgWgPgCgmQA6ggA0ABIAUABIAAgKIAAgKIAAgeQAAgFgCgDIgFgEQgOgRgTgLIAAgKIAAgKIAAg8QAFAAACgDIAGgFQATgYgMgIQADgRAOAFQAXAIAUgkQAAgFADgCQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQAHAOARgQIABgFQAngFAoAAQA2ApAsA0QASAUANAbQAoAPApgIQAJgCAKAFIALATQAQAYANAbQAAAFgDADIgCADQgFAdAAAeQBogDBCAhIAAAKIgBAJIgJA8QgKAAgIAEIgCABQgkgBgEAaQgFAAgCADQgDACABAFQABAbgMANQAKAKAEATQAGAfAKAeQAHAVgPAFQggAIAUAkIAAAKQAAAFgCAFQgDAKgFAKQg6AAgOgIg");
	this.shape_2.setTransform(35.5,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ADBFMQgNgHgPgFQAWgFgRgMQgWgPgNgcQg8gfhHgOQgDAAgDAEIgFgCQgJgHgKgEQgegKgIgGQAAgFgDgCQgCgDgFAAQgQACgEgWQgFAAgCgCIgDgDQgWARACggIgoAAIAAgKQAAgFgCgEQgDgGgFgFQgKAAgIgEIgFgCQgWgRgPANQAHgVgQACQgOADgRgOQgFAAgCgCQgDgDADgDQANgRgugFQgDgRgNgJQgWgPgCgmQA6ggA0ABIAUABIAAgKIAAgKIAAgeQAAgFgCgDIgFgEQgOgRgTgLIAAgKIAAgKIAAg8QAFAAACgDIAGgFQATgYgMgIQADgRAOAFQAXAIAUgkQAAgFADgCQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQAHAOARgQIABgFQAngFAoAAQA2ApAsA0QASAUANAbQAoAPApgIQAJgCAKAFIALATQAQAYANAbQAAAFgDADIgCADQgFAdAAAeQBogDBCAhIAAAKIgBAJIgJA8QgKAAgIAEIgCABQgkgBgEAaQgFAAgCADQgDACABAFQABAbgMANQAKAKAEATQAGAfAKAeQAHAVgPAFQggAIAUAkIAAAKQAAAFgCAFQgDAKgFAKQg6AAgOgIg");
	this.shape_3.setTransform(35.5,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,68);


(lib.Meta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9900").s().p("AlWHuIgQgIQgCgBAAgFQgYgHgSgLQgDgCgFAAQAAgFgCgBIgQgIQgCgBAAgFQgxAJgVgTQgegVAAgxIAAgUQgSgWgIgdQgEgOAAgPQgDglAPgTQAIgJAAgPQgEhChCgEQgFgFgCgGQgDgOAAgPQAjgYANgoQAGgQAQABIAAgUIAAgeQAKgPAOgHQAMgHgGgVQAKAAAIgEIAEgEQADgCAFAAQAag1AlgsQAHgIAKgFQAUgFASgJQACgBAAgFIAoAAQARgSAWgNQAGgEAFgFQAAgeADgeQACgKAFgKQAZAKALAWQAEAIAAAKQAtAQA3gQQAAAFACABIAQAIQACABAAAFIAogKQAXgbABg1QABgKAFgKQAiAVAZAdIAKAKQA4AhBogXQAAgFACgBIAQgIQACgBAAgFQBQADA8gXQAAgFACgDIAEgEQAEgIAAgKQBggxBogpQBKDOgOFXIAAAKQjvAMjTBEQgmACgQAaQgBACgFAAIhQAKQgeATgUAfIgJAKQhXAXhnAHQgRBOAGBmIABAeQgvASg/ACQAAgFgCgBg");
	this.shape.setTransform(62.1,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AIvnzQBKDOgOFXQAAAFAAAFQjvAMjTBEQgmACgQAaQgBACgFAAQgoAFgoAFQgeAUgUAeQgEAFgFAFQhXAXhnAHQgRBOAGBmQABAPAAAPQgvASg/ACQAAgFgCgBQgIgEgIgEQgCgBAAgFQgYgHgSgKQgDgDgFAAQAAgFgCgBQgIgEgIgEQgCgBAAgFQgxAIgVgSQgegUAAgyQAAgKAAgKQgSgWgIgdQgEgOAAgPQgDglAPgTQAIgJAAgPQgEhChCgEQgFgFgCgGQgDgOAAgPQAjgZANgnQAGgQAQABQAAgKAAgKQAAgPAAgPQAKgPAOgIQAMgGgGgVQAKAAAIgEQACgBACgDQADgCAFAAQAag2AlgrQAHgIAKgFQAUgFASgJQACgBAAgFQAUAAAUAAQARgSAWgOQAGgDAFgFQAAgeADgeQACgKAFgKQAZAKALAWQAEAIAAAKQAtAQA3gQQAAAFACABQAIAEAIAEQACABAAAFQAUgFAUgFQAXgbABg1QABgKAFgKQAiAVAZAdQAFAFAFAFQA4AhBogXQAAgFACgBQAIgEAIgEQACgBAAgFQBQADA8gXQAAgFACgDQADgCABgCQAEgIAAgKQBggxBogpg");
	this.shape_1.setTransform(62.1,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlWHuIgQgIQgCgBAAgFQgYgHgSgLQgDgCgFAAQAAgFgCgBIgQgIQgCgBAAgFQgxAJgVgTQgegVAAgxIAAgUQgSgWgIgdQgEgOAAgPQgDglAPgTQAIgJAAgPQgEhChCgEQgFgFgCgGQgDgOAAgPQAjgYANgoQAGgQAQABIAAgUIAAgeQAKgPAOgHQAMgHgGgVQAKAAAIgEIAEgEQADgCAFAAQAag1AlgsQAHgIAKgFQAUgFASgJQACgBAAgFIAoAAQARgSAWgNQAGgEAFgFQAAgeADgeQACgKAFgKQAZAKALAWQAEAIAAAKQAtAQA3gQQAAAFACABIAQAIQACABAAAFIAogKQAXgbABg1QABgKAFgKQAiAVAZAdIAKAKQA4AhBogXQAAgFACgBIAQgIQACgBAAgFQBQADA8gXQAAgFACgDIAEgEQAEgIAAgKQBggxBogpQBKDOgOFXIAAAKQjvAMjTBEQgmACgQAaQgBACgFAAIhQAKQgeATgUAfIgJAKQhXAXhnAHQgRBOAGBmIABAeQgvASg/ACQAAgFgCgBg");
	this.shape_2.setTransform(62.1,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AlWHuIgQgIQgCgBAAgFQgYgHgSgLQgDgCgFAAQAAgFgCgBIgQgIQgCgBAAgFQgxAJgVgTQgegVAAgxIAAgUQgSgWgIgdQgEgOAAgPQgDglAPgTQAIgJAAgPQgEhChCgEQgFgFgCgGQgDgOAAgPQAjgYANgoQAGgQAQABIAAgUIAAgeQAKgPAOgHQAMgHgGgVQAKAAAIgEIAEgEQADgCAFAAQAag1AlgsQAHgIAKgFQAUgFASgJQACgBAAgFIAoAAQARgSAWgNQAGgEAFgFQAAgeADgeQACgKAFgKQAZAKALAWQAEAIAAAKQAtAQA3gQQAAAFACABIAQAIQACABAAAFIAogKQAXgbABg1QABgKAFgKQAiAVAZAdIAKAKQA4AhBogXQAAgFACgBIAQgIQACgBAAgFQBQADA8gXQAAgFACgDIAEgEQAEgIAAgKQBggxBogpQBKDOgOFXIAAAKQjvAMjTBEQgmACgQAaQgBACgFAAIhQAKQgeATgUAfIgJAKQhXAXhnAHQgRBOAGBmIABAeQgvASg/ACQAAgFgCgBg");
	this.shape_3.setTransform(62.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.2,100);


(lib.Magdalena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("AghEMQgJgFgRgDQgFAFgDgBQgSgHgYgHQAAgFgDgDIgDgDQgHgVgbACQgFgUgIgTQgPghASgSQgFgKgHgIQgWgbAYgZQAAgFgCgDIgGgEQgMgNgKgPQgFAAgCgDQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAABAAQAJgHgMgaIAQgtQALghAXgMIAAgKQAAgFgCgEQgDgGgFgFQAFgFABgFQAEgZAAgZIAAgKQBOgdBRgLQAMgXgDgZQgDgRAigPQA0gCAcgHIAKgBQAAAFACABQAIAEAEAFQAJAMARgRIAOBkQAEAfAWATQgFAKAAAKQgCAhgNARQgKAFgKAEQgUAGgUAFQgeAUgVAeIgdAnQAAAFADACIACADQAAAKgFAKQAQgBAIALQANARADAhQAKAAAIAEIAEADQADADAFAAQAAAFACACIAEAFQAEASAKAKIAAAKQAAAFgDACQgMAIgPAFIgdgBQgUACgLATQgGAdApAcQAUANgFAoQAKAAAIAEIAEACQAUAJgWAFQAAAKgDABQgbAJgeAAQgngpg2gfg");
	this.shape.setTransform(21,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAolJQAzgCAdgHQAFgBAFAAQAAAFACABQAIAEAEAFQAJALARgQQAHAwAHAzQAFAgAVATQgFAKAAAKQgBAigOAQQgKAFgKAEQgUAGgUAFQgeATgVAeQgOAVgPATQAAAFADADIACACQAAAKgFAKQAQgBAIALQANASADAgQAKAAAIAEQACABADADQACACAFAAQAAAFADADQACACAAABQAFATAKAKQAAAFAAAFQAAAFgCACQgNAIgPAFQgTgBgKABQgUABgLATQgGAdApAcQAUAOgFAnQAKAAAIAEQACABACABQAVAJgXAFQAAAKgDABQgbAJgeAAQgngpg2geQgJgGgRgDQgFAFgDgBQgTgHgXgHQAAgFgDgCQgCgDgBgBQgHgVgbACQgFgUgIgSQgPgiASgSQgFgKgHgJQgXgaAZgZQAAgFgDgCQgCgDgDgCQgMgNgKgPQgFAAgDgCQgCgDACgBQAKgHgMgaQAJgaAHgTQALghAXgMQAAgFAAgFQAAgFgCgEQgDgGgFgFQAFgFABgGQAEgYAAgZQAAgFAAgFQBOgdBRgLQANgXgEgZQgDgRAigPg");
	this.shape_1.setTransform(21,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghEMQgJgFgRgDQgFAFgDgBQgSgHgYgHQAAgFgDgDIgDgDQgHgVgbACQgFgUgIgTQgPghASgSQgFgKgHgIQgWgbAYgZQAAgFgCgDIgGgEQgMgNgKgPQgFAAgCgDQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAABAAQAJgHgMgaIAQgtQALghAXgMIAAgKQAAgFgCgEQgDgGgFgFQAFgFABgFQAEgZAAgZIAAgKQBOgdBRgLQAMgXgDgZQgDgRAigPQA0gCAcgHIAKgBQAAAFACABQAIAEAEAFQAJAMARgRIAOBkQAEAfAWATQgFAKAAAKQgCAhgNARQgKAFgKAEQgUAGgUAFQgeAUgVAeIgdAnQAAAFADACIACADQAAAKgFAKQAQgBAIALQANARADAhQAKAAAIAEIAEADQADADAFAAQAAAFACACIAEAFQAEASAKAKIAAAKQAAAFgDACQgMAIgPAFIgdgBQgUACgLATQgGAdApAcQAUANgFAoQAKAAAIAEIAEACQAUAJgWAFQAAAKgDABQgbAJgeAAQgngpg2gfg");
	this.shape_2.setTransform(21,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AghEMQgJgFgRgDQgFAFgDgBQgSgHgYgHQAAgFgDgDIgDgDQgHgVgbACQgFgUgIgTQgPghASgSQgFgKgHgIQgWgbAYgZQAAgFgCgDIgGgEQgMgNgKgPQgFAAgCgDQgBAAAAgBQgBAAAAgBQAAAAABgBQAAAAABAAQAJgHgMgaIAQgtQALghAXgMIAAgKQAAgFgCgEQgDgGgFgFQAFgFABgFQAEgZAAgZIAAgKQBOgdBRgLQAMgXgDgZQgDgRAigPQA0gCAcgHIAKgBQAAAFACABQAIAEAEAFQAJAMARgRIAOBkQAEAfAWATQgFAKAAAKQgCAhgNARQgKAFgKAEQgUAGgUAFQgeAUgVAeIgdAnQAAAFADACIACADQAAAKgFAKQAQgBAIALQANARADAhQAKAAAIAEIAEADQADADAFAAQAAAFACACIAEAFQAEASAKAKIAAAKQAAAFgDACQgMAIgPAFIgdgBQgUACgLATQgGAdApAcQAUANgFAoQAKAAAIAEIAEACQAUAJgWAFQAAAKgDABQgbAJgeAAQgngpg2gfg");
	this.shape_3.setTransform(21,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,68);


(lib.InicioClip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AkHDWQhJhcAAh9QAAiOBgheQBghfCNAGQCXgGBfBeQBfBfAACNQgBB4hHBcQhdB6irAAQirAAheh0gAiCjRQglBJAACIQgBCiA6BOQAoA3BGAAQAxAAAggYQApgeAYhBQAWhDAAhpQABh+gYg+QgXg/gkgZQglgagvAAQhXAAgtBZg");
	this.shape.setTransform(421.6,123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_1.setTransform(365.2,123.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AiIEkQhPgpgqhNQgshMABhWQAAhaAvhSQAwhRBQgtQBRgtBbAAQBCAABLAdQArARALAAQAPAAAMgLQALgLADgYIATAAIAADcIgTAAQgUhWg5guQg4guhIAAQg7AAgwAiQgzAigWA4QgeBGAABXQAABUAWBHQAVBGAvAkQAsAjBKAAQA7AAAzgaQAxgaA4hAIAAA2Qg2A4g6AZQg5AZhOAAQhlAAhPgog");
	this.shape_2.setTransform(311.3,123.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_3.setTransform(258.5,123.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("ADlFFImtoQIAAGTQAAA3AaATQAYATAhAAIAPAAIAAASIjiAAIAAgSQA1gBAUgVQAVgUAAgzIAAm/IgNgRQgVgagPgIQgQgIgdgBIAAgRIDiAAIE4GJIAAkQQAAg6gQgUQgWgag1AAIAAgRIDSAAIAAARQgpAFgNAJQgOAIgIATQgIASAAAtIAAIQg");
	this.shape_4.setTransform(204.9,124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_5.setTransform(151.8,123.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#996600").ss(1,1,1).p("A3PmWMAufAAAIAAMtMgufAAAg");
	this.shape_6.setTransform(297.6,122.2,1.252,1.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("A3OGXIAAstMAudAAAIAAMtg");
	this.shape_7.setTransform(297.6,122.2,1.252,1.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996600").ss(1,1,1).p("EgjlgMtMBHLAAAIAAZbMhHLAAAg");
	this.shape_8.setTransform(298.4,123.8,1.13,1.268);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("EgjlAMuIAA5bMBHLAAAIAAZbg");
	this.shape_9.setTransform(298.4,123.8,1.13,1.268);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#996600").ss(1,1,1).p("EguPgTsMBcfAAAMAAAAnZMhcfAAAg");
	this.shape_10.setTransform(296,126.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EguPATtMAAAgnZMBcfAAAMAAAAnZg");
	this.shape_11.setTransform(296,126.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ADlFFImtoQIAAGTQAAA3AaATQAYATAhAAIAPAAIAAASIjiAAIAAgSQA1gBAUgVQAVgUAAgzIAAm/IgNgRQgVgagPgIQgQgIgdgBIAAgRIDiAAIE4GJIAAkQQAAg6gQgUQgWgag1AAIAAgRIDSAAIAAARQgpAFgNAJQgOAIgIATQgIASAAAtIAAIQg");
	this.shape_12.setTransform(204.9,124);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_13.setTransform(151.8,123.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiIEkQhPgpgqhNQgshMABhWQAAhaAvhSQAwhRBQgtQBRgtBbAAQBCAABLAdQArARALAAQAPAAAMgLQALgLADgYIATAAIAADcIgTAAQgUhWg5guQg4guhIAAQg7AAgwAiQgzAigWA4QgeBGAABXQAABUAWBHQAVBGAvAkQAsAjBKAAQA7AAAzgaQAxgaA4hAIAAA2Qg2A4g6AZQg5AZhOAAQhlAAhPgog");
	this.shape_14.setTransform(311.3,123.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkHDWQhJhcAAh9QAAiOBgheQBghfCNAGQCXgGBfBeQBfBfAACNQgBB4hHBcQhdB6irAAQirAAheh0gAiCjRQglBJAACIQgBCiA6BOQAoA3BGAAQAxAAAggYQApgeAYhBQAWhDAAhpQABh+gYg+QgXg/gkgZQglgagvAAQhXAAgtBZg");
	this.shape_15.setTransform(421.6,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:151.8}},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_5,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_14},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_1,p:{x:258.5}},{t:this.shape_2},{t:this.shape_5,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape_15}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_1,p:{x:258.5}},{t:this.shape_2},{t:this.shape_5,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_14},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_5,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,594,254.3);


(lib.InicioClip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkHDWQhJhcAAh9QAAiOBgheQBghfCNAGQCXgGBfBeQBfBfAACNQgBB4hHBcQhdB6irAAQirAAheh0gAiCjRQglBJAACIQgBCiA6BOQAoA3BGAAQAxAAAggYQApgeAYhBQAWhDAAhpQABh+gYg+QgXg/gkgZQglgagvAAQhXAAgtBZg");
	this.shape.setTransform(421.6,123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_1.setTransform(365.2,123.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiIEkQhPgpgqhNQgshMABhWQAAhaAvhSQAwhRBQgtQBRgtBbAAQBCAABLAdQArARALAAQAPAAAMgLQALgLADgYIATAAIAADcIgTAAQgUhWg5guQg4guhIAAQg7AAgwAiQgzAigWA4QgeBGAABXQAABUAWBHQAVBGAvAkQAsAjBKAAQA7AAAzgaQAxgaA4hAIAAA2Qg2A4g6AZQg5AZhOAAQhlAAhPgog");
	this.shape_2.setTransform(311.3,123.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_3.setTransform(258.5,123.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADlFFImtoQIAAGTQAAA3AaATQAYATAhAAIAPAAIAAASIjiAAIAAgSQA1gBAUgVQAVgUAAgzIAAm/IgNgRQgVgagPgIQgQgIgdgBIAAgRIDiAAIE4GJIAAkQQAAg6gQgUQgWgag1AAIAAgRIDSAAIAAARQgpAFgNAJQgOAIgIATQgIASAAAtIAAIQg");
	this.shape_4.setTransform(204.9,124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_5.setTransform(151.8,123.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("A3PmWMAufAAAIAAMtMgufAAAg");
	this.shape_6.setTransform(297.6,122.2,1.252,1.57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("A3OGXIAAstMAudAAAIAAMtg");
	this.shape_7.setTransform(297.6,122.2,1.252,1.57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EgjlgMtMBHLAAAIAAZbMhHLAAAg");
	this.shape_8.setTransform(298.4,123.8,1.13,1.268);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("EgjlAMuIAA5bMBHLAAAIAAZbg");
	this.shape_9.setTransform(298.4,123.8,1.13,1.268);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("EguPgTsMBcfAAAMAAAAnZMhcfAAAg");
	this.shape_10.setTransform(296,126.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996600").s().p("EguPATtMAAAgnZMBcfAAAMAAAAnZg");
	this.shape_11.setTransform(296,126.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADlFFImtoQIAAGTQAAA3AaATQAYATAhAAIAPAAIAAASIjiAAIAAgSQA1gBAUgVQAVgUAAgzIAAm/IgNgRQgVgagPgIQgQgIgdgBIAAgRIDiAAIE4GJIAAkQQAAg6gQgUQgWgag1AAIAAgRIDSAAIAAARQgpAFgNAJQgOAIgIATQgIASAAAtIAAIQg");
	this.shape_12.setTransform(204.9,124);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AilE+IAAgSIAVAAQAcAAARgJQAMgHAGgQQAGgLAAgwIAAmhQAAgxgGgMQgFgMgPgJQgQgKgbAAIgVAAIAAgRIFLAAIAAARIgVAAQgbAAgRAKQgMAHgIAQQgFALAAAwIAAGhQAAAxAGAMQAFAMAQAKQAQAIAaAAIAVAAIAAASg");
	this.shape_13.setTransform(151.8,123.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiIEkQhPgpgqhNQgshMABhWQAAhaAvhSQAwhRBQgtQBRgtBbAAQBCAABLAdQArARALAAQAPAAAMgLQALgLADgYIATAAIAADcIgTAAQgUhWg5guQg4guhIAAQg7AAgwAiQgzAigWA4QgeBGAABXQAABUAWBHQAVBGAvAkQAsAjBKAAQA7AAAzgaQAxgaA4hAIAAA2Qg2A4g6AZQg5AZhOAAQhlAAhPgog");
	this.shape_14.setTransform(311.3,123.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkHDWQhJhcAAh9QAAiOBgheQBghfCNAGQCXgGBfBeQBfBfAACNQgBB4hHBcQhdB6irAAQirAAheh0gAiCjRQglBJAACIQgBCiA6BOQAoA3BGAAQAxAAAggYQApgeAYhBQAWhDAAhpQABh+gYg+QgXg/gkgZQglgagvAAQhXAAgtBZg");
	this.shape_15.setTransform(421.6,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:151.8}},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_5,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_14},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_1,p:{x:258.5}},{t:this.shape_2},{t:this.shape_5,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape_15}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_1,p:{x:258.5}},{t:this.shape_2},{t:this.shape_5,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_4},{t:this.shape_3,p:{x:258.5}},{t:this.shape_14},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{x:151.8}},{t:this.shape_4},{t:this.shape_5,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:258.5}},{t:this.shape_2},{t:this.shape_1,p:{x:365.2}},{t:this.shape}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,594,254.3);


(lib.Huila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiiFAQgLAJgTABQgigVgkgTQgOg9gugdQAYglA4AHQATgZgRgbQgCgDAAgFQANgpBDALQALgTATgLQAhALAbgLQgUhBgcg3QgCgEAAgFQAEgfAagJQAdgBALgTIAygUQANgoAhgYQADgBAAgFQBGgZAyAPQAHA5A/glQAngzAig5QACgCAFAAQANAKgMBGIgBAKQhTBXg0BxIAFAAQACAbgOALQgDABgFAAIgyAUQgNAbgPAYQgCAEAAAFQgDAWgbgCQg5BjhGBTQgCADAAAFQgjAPgZAZIgegKg");
	this.shape.setTransform(32.3,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AE9lJQANAKgMBGQgBAFAAAFQhTBXg0BxIAFAAQACAbgOAKQgDACgFAAQgZAKgZAKQgNAcgPAXQgCAEAAAFQgDAWgbgCQg5BjhGBTQgCADAAAFQgjAPgZAZQgPgFgPgFQgLAJgTABQgigVgkgTQgOg9gugdQAYglA4AHQATgZgRgaQgCgEAAgFQANgpBDALQALgTATgLQAhALAbgLQgUhBgcg3QgCgEAAgFQAEgfAagJQAdgBALgTQAZgKAZgKQANgpAhgXQADgBAAgFQBGgZAyAPQAHA5A/glQAngzAig5QACgCAFAAg");
	this.shape_1.setTransform(32.3,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiiFAQgLAJgTABQgigVgkgTQgOg9gugdQAYglA4AHQATgZgRgbQgCgDAAgFQANgpBDALQALgTATgLQAhALAbgLQgUhBgcg3QgCgEAAgFQAEgfAagJQAdgBALgTIAygUQANgoAhgYQADgBAAgFQBGgZAyAPQAHA5A/glQAngzAig5QACgCAFAAQANAKgMBGIgBAKQhTBXg0BxIAFAAQACAbgOALQgDABgFAAIgyAUQgNAbgPAYQgCAEAAAFQgDAWgbgCQg5BjhGBTQgCADAAAFQgjAPgZAZIgegKg");
	this.shape_2.setTransform(32.3,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiiFAQgLAJgTABQgigVgkgTQgOg9gugdQAYglA4AHQATgZgRgbQgCgDAAgFQANgpBDALQALgTATgLQAhALAbgLQgUhBgcg3QgCgEAAgFQAEgfAagJQAdgBALgTIAygUQANgoAhgYQADgBAAgFQBGgZAyAPQAHA5A/glQAngzAig5QACgCAFAAQANAKgMBGIgBAKQhTBXg0BxIAFAAQACAbgOALQgDABgFAAIgyAUQgNAbgPAYQgCAEAAAFQgDAWgbgCQg5BjhGBTQgCADAAAFQgjAPgZAZIgegKg");
	this.shape_3.setTransform(32.3,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.7,66);


(lib.Guaviare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AhoE0IgegoIgVgeIgJgKQgqgSgvgRQgBAAAAgFQgoAAgeAKIgVAdIgJALQgFAFgDAGQgCAEAAAFQgeANgegNQg3gogmg6QgZgnggghIAAhZIAAiCQBZgMBRgSQATgLAMgSIAJgLIAKgKQAbgWA/AMQATgLAMgSIAJgLQC1g8DQAAQBegWBoA4QACABAAAFQgWADAFAaIAEAMQADAJAAAKQAKAAAIAEIAEAEQADACAFAAQAFAUAOALQAGAEADAGQACAEAAAFQBcAJBEAfQgYAQgbAJQgTAFgUAAQhTAlhrANQgKAKgMAGQgIAEgKAAIgoAeIgKAJQgsgSgkASQgSAbAEA1QACA2gIAuIgJALIgLATQgXAGgTALQgDADgFAAQgHAcgPATQgPAUgfAIQgBAAAAAFQgqgDgcgRg");
	this.shape.setTransform(57.5,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ACllBQBegVBoA3QACABAAAFQgWADAFAaQACAGACAGQADAJAAAKQAKAAAIAEQACABADADQACACAFAAQAFAUAPALQAFAEADAGQACAEAAAFQBcAJBEAfQgYAQgbAJQgTAFgUAAQhTAlhrANQgKAKgMAGQgIAEgKAAQgUAPgUAPQgFAEgFAFQgrgSglASQgRAcACA0QADA2gIAuQgFAFgEAGQgGAJgFAKQgYAGgRAMQgEACgFAAQgHAcgPATQgPAUgfAIQgBAAAAAFQgpgDgdgRQgPgUgPgUQgKgPgLgOQgEgGgFgFQgqgSgvgQQgBgBAAgFQgpAAgdAKQgKAPgLAPQgEAFgFAFQgFAFgDAGQgCAEAAAFQgeANgegNQg3gogmg6QgZgnggghQAAgtAAgsQAAhBAAhBQBYgMBSgSQATgLAMgSQAEgGAFgFQAFgFAFgFQAbgWA/AMQATgLAMgSQAEgGAFgFQC1g8DQAAg");
	this.shape_1.setTransform(57.5,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoE0IgegoIgVgeIgJgKQgqgSgvgRQgBAAAAgFQgoAAgeAKIgVAdIgJALQgFAFgDAGQgCAEAAAFQgeANgegNQg3gogmg6QgZgnggghIAAhZIAAiCQBZgMBRgSQATgLAMgSIAJgLIAKgKQAbgWA/AMQATgLAMgSIAJgLQC1g8DQAAQBegWBoA4QACABAAAFQgWADAFAaIAEAMQADAJAAAKQAKAAAIAEIAEAEQADACAFAAQAFAUAOALQAGAEADAGQACAEAAAFQBcAJBEAfQgYAQgbAJQgTAFgUAAQhTAlhrANQgKAKgMAGQgIAEgKAAIgoAeIgKAJQgsgSgkASQgSAbAEA1QACA2gIAuIgJALIgLATQgXAGgTALQgDADgFAAQgHAcgPATQgPAUgfAIQgBAAAAAFQgqgDgcgRg");
	this.shape_2.setTransform(57.5,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhoE0IgegoIgVgeIgJgKQgqgSgvgRQgBAAAAgFQgoAAgeAKIgVAdIgJALQgFAFgDAGQgCAEAAAFQgeANgegNQg3gogmg6QgZgnggghIAAhZIAAiCQBZgMBRgSQATgLAMgSIAJgLIAKgKQAbgWA/AMQATgLAMgSIAJgLQC1g8DQAAQBegWBoA4QACABAAAFQgWADAFAaIAEAMQADAJAAAKQAKAAAIAEIAEAEQADACAFAAQAFAUAOALQAGAEADAGQACAEAAAFQBcAJBEAfQgYAQgbAJQgTAFgUAAQhTAlhrANQgKAKgMAGQgIAEgKAAIgoAeIgKAJQgsgSgkASQgSAbAEA1QACA2gIAuIgJALIgLATQgXAGgTALQgDADgFAAQgHAcgPATQgPAUgfAIQgBAAAAAFQgqgDgcgRg");
	this.shape_3.setTransform(57.5,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,65.6);


(lib.Guajira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai6EjQgIgFgKAAIAAgUQAAgPgEgOQgBgGgFgFQgTgBgGgLQgIgPgMgJQgFgEAAgKQhJgDg4gMQgBAAAAgFIAAgKIAAgKIAAgUIAAgUQAFAAACgCIAGgFIAEgFQADgDAAgFQBEgKA3giQARgLAUgFQAPgTAUgMQAegSAPgeQA4gcBTgCIAJgLQAGgJAIgFQAHgFAKAAQAFgKAIgFQAQgLAFgXQABgBAFAAQgFgKADgGQAHgOANgMQAHgIAPAAQAPAFAPAAQAKAAAKgFQgHgbAKgJQAVgUAagOQAvgUAuAaQAHAEAKAAQATALAPAOQATARAHAcQAAAFgCADIgEAEIgHARQgCAGgFAFQhdBJiJAbIguBJQgTAfgPAjQgnAHgYATQgQAOgUAKQgYAugbAwQgRAdgCAvQgVARgXAAQgTAAgTgMg");
	this.shape.setTransform(39.5,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADhklQAwgUAtAaQAHAEAKAAQATALAQAOQASARAHAcQAAAFgCADQgDACgBACQgEAIgDAJQgCAGgFAFQhcBJiKAbQgWAmgXAjQgUAfgPAjQgnAHgYATQgQAOgUAKQgYAugbAwQgRAdgCAvQgoAegrgZQgHgFgKAAQAAgKAAgKQAAgPgEgOQgBgGgFgFQgTgBgGgLQgIgPgMgJQgFgEAAgKQhJgDg4gMQgBAAAAgFQAAgFAAgFQAAgFAAgFQAAgKAAgKQAAgKAAgKQAFAAACgCQADgDACgCQADgDACgCQADgDAAgFQBEgKA3giQARgLAUgFQAPgTAUgMQAegSAPgeQA4gcBTgCQAFgFAEgGQAGgJAIgFQAHgFAKAAQAFgKAIgFQAQgLAGgXQAAgBAFAAQgFgKADgGQAHgOANgMQAHgIAPAAQAPAFAPAAQAKAAAKgFQgHgbALgJQAUgUAagOg");
	this.shape_1.setTransform(39.5,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai6EjQgIgFgKAAIAAgUQAAgPgEgOQgBgGgFgFQgTgBgGgLQgIgPgMgJQgFgEAAgKQhJgDg4gMQgBAAAAgFIAAgKIAAgKIAAgUIAAgUQAFAAACgCIAGgFIAEgFQADgDAAgFQBEgKA3giQARgLAUgFQAPgTAUgMQAegSAPgeQA4gcBTgCIAJgLQAGgJAIgFQAHgFAKAAQAFgKAIgFQAQgLAFgXQABgBAFAAQgFgKADgGQAHgOANgMQAHgIAPAAQAPAFAPAAQAKAAAKgFQgHgbAKgJQAVgUAagOQAvgUAuAaQAHAEAKAAQATALAPAOQATARAHAcQAAAFgCADIgEAEIgHARQgCAGgFAFQhdBJiJAbIguBJQgTAfgPAjQgnAHgYATQgQAOgUAKQgYAugbAwQgRAdgCAvQgVARgXAAQgTAAgTgMg");
	this.shape_2.setTransform(39.5,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ai6EjQgIgFgKAAIAAgUQAAgPgEgOQgBgGgFgFQgTgBgGgLQgIgPgMgJQgFgEAAgKQhJgDg4gMQgBAAAAgFIAAgKIAAgKIAAgUIAAgUQAFAAACgCIAGgFIAEgFQADgDAAgFQBEgKA3giQARgLAUgFQAPgTAUgMQAegSAPgeQA4gcBTgCIAJgLQAGgJAIgFQAHgFAKAAQAFgKAIgFQAQgLAFgXQABgBAFAAQgFgKADgGQAHgOANgMQAHgIAPAAQAPAFAPAAQAKAAAKgFQgHgbAKgJQAVgUAagOQAvgUAuAaQAHAEAKAAQATALAPAOQATARAHAcQAAAFgCADIgEAEIgHARQgCAGgFAFQhdBJiJAbIguBJQgTAfgPAjQgnAHgYATQgQAOgUAKQgYAugbAwQgRAdgCAvQgVARgXAAQgTAAgTgMg");
	this.shape_3.setTransform(39.5,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,60.5);


(lib.Guainía = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AJnGpQgIgWgBgcIgBgeQgdhLghhAQgKgRgYAFIAAAAIgCgDIAAgBQADgHAAgIQAAgFgFgFQgQACABgWQAAgFgFgFQgLgJgSgFQgBgBAAgFQgVAOgdAGQgDAgglgCQABAkgeAHQgLACgKAFQgUAigUgOQgngrghAfQgDACgFAAQAAAUgEATQgBAGgFAFQkmADj1AbQgKgFgIgHQgCgDAAgFQgNAMgbgCIgVgdIgJgLQgFgOAOg2QACgLATgBQAKgKgEgTQgBgGgFgFQhFgChRAMIgygUQgRghgcgVQgMgJgDgRIArgZQAHgFAKAAQAIgaAfgHQABgBAAgFQApgJAWgcQACgDAFAAIAAgoIAAgUQAXgMARgSIAKgKQgVgbAogIQABAAAAgFIAogKQAWgIAKgVQADgGAFgFQAdgKApAAQgCggAfgDIABgFQBvASBtgcQAognBZAJQALgYASgQIALgKQBTgbBXARQAFgKAIgFQAHgFAKAAQAXgCAnAeQADACAFAAQALA3AjAdQALAJgHAbQgMAngnAJQgJACgKAAQgjAzgkAvIgTAWQAMAPBEAPQAQgBgBAWQAAAEAFAFIAyAUQBMA2ApBcQADAIAKAFQgGA+AvA5IATAVQAAAUAIAQQACAEAKAAQgFAoAJAXQAHARAJAKQggATgJgCQgIgCgKAFIgBAAg");
	this.shape.setTransform(67.5,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AFPmoQAXgCAnAeQADACAFAAQALA3AjAdQALAJgHAbQgMAngmAJQgKACgKAAQgiAzgkAvQgKAMgKAKQAMAPBEAPQARgBgCAWQAAAEAFAFQAZAKAZAKQBMA2ApBcQADAIAKAFQgFA+AuA5QAJALAKAKQAAAUAIAQQACAEAKAAQgEAoAIAXQAHARAJAKQggATgJgCQgIgCgKAFQAAAAgBAAQgIgWgBgcQgBgPAAgPQgdhLghhAQgJgRgYAFIgBAAQgBgCgBgBIAAgBQADgHAAgIQAAgFgFgFQgQACABgWQAAgFgFgFQgLgJgRgFQgCgBAAgFQgVAOgdAGQgDAgglgCQABAkgeAHQgLACgKAFQgUAigUgOQgmgrgiAfQgDACgFAAQAAAUgEATQgBAGgFAFQkmADj1AbQgKgFgIgHQgCgDAAgFQgNAMgbgCQgKgPgLgOQgEgGgFgFQgFgOANg2QADgLATgBQAJgKgDgTQgBgGgFgFQhGgChQAMQgZgKgZgKQgRghgcgVQgMgJgDgRQAWgMAVgNQAHgFAKAAQAIgaAfgHQABgBAAgFQApgJAWgcQACgDAFAAQAAgUAAgUQAAgKAAgKQAWgMASgSQAFgFAFgFQgWgbApgIQABAAAAgFQAUgFAUgFQAVgIALgVQADgGAFgFQAdgKApAAQgDggAhgDQAAAAAAgFQBuASBugcQAognBZAJQALgYATgQQAFgFAFgFQBTgbBXARQAFgKAIgFQAHgFAKAAg");
	this.shape_1.setTransform(67.5,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJnGpQgIgWgBgcIgBgeQgdhLghhAQgKgRgYAFIAAAAIgCgDIAAgBQADgHAAgIQAAgFgFgFQgQACABgWQAAgFgFgFQgLgJgSgFQgBgBAAgFQgVAOgdAGQgDAgglgCQABAkgeAHQgLACgKAFQgUAigUgOQgngrghAfQgDACgFAAQAAAUgEATQgBAGgFAFQkmADj1AbQgKgFgIgHQgCgDAAgFQgNAMgbgCIgVgdIgJgLQgFgOAOg2QACgLATgBQAKgKgEgTQgBgGgFgFQhFgChRAMIgygUQgRghgcgVQgMgJgDgRIArgZQAHgFAKAAQAIgaAfgHQABgBAAgFQApgJAWgcQACgDAFAAIAAgoIAAgUQAXgMARgSIAKgKQgVgbAogIQABAAAAgFIAogKQAWgIAKgVQADgGAFgFQAdgKApAAQgCggAfgDIABgFQBvASBtgcQAognBZAJQALgYASgQIALgKQBTgbBXARQAFgKAIgFQAHgFAKAAQAXgCAnAeQADACAFAAQALA3AjAdQALAJgHAbQgMAngnAJQgJACgKAAQgjAzgkAvIgTAWQAMAPBEAPQAQgBgBAWQAAAEAFAFIAyAUQBMA2ApBcQADAIAKAFQgGA+AvA5IATAVQAAAUAIAQQACAEAKAAQgFAoAJAXQAHARAJAKQggATgJgCQgIgCgKAFIgBAAg");
	this.shape_2.setTransform(67.5,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AJnGpQgIgWgBgcIgBgeQgdhLghhAQgKgRgYAFIAAAAIgCgDIAAgBQADgHAAgIQAAgFgFgFQgQACABgWQAAgFgFgFQgLgJgSgFQgBgBAAgFQgVAOgdAGQgDAgglgCQABAkgeAHQgLACgKAFQgUAigUgOQgngrghAfQgDACgFAAQAAAUgEATQgBAGgFAFQkmADj1AbQgKgFgIgHQgCgDAAgFQgNAMgbgCIgVgdIgJgLQgFgOAOg2QACgLATgBQAKgKgEgTQgBgGgFgFQhFgChRAMIgygUQgRghgcgVQgMgJgDgRIArgZQAHgFAKAAQAIgaAfgHQABgBAAgFQApgJAWgcQACgDAFAAIAAgoIAAgUQAXgMARgSIAKgKQgVgbAogIQABAAAAgFIAogKQAWgIAKgVQADgGAFgFQAdgKApAAQgCggAfgDIABgFQBvASBtgcQAognBZAJQALgYASgQIALgKQBTgbBXARQAFgKAIgFQAHgFAKAAQAXgCAnAeQADACAFAAQALA3AjAdQALAJgHAbQgMAngnAJQgJACgKAAQgjAzgkAvIgTAWQAMAPBEAPQAQgBgBAWQAAAEAFAFIAyAUQBMA2ApBcQADAIAKAFQgGA+AvA5IATAVQAAAUAIAQQACAEAKAAQgFAoAJAXQAHARAJAKQggATgJgCQgIgCgKAFIgBAAg");
	this.shape_3.setTransform(67.5,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,85);


(lib.Cundinamarca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AitEJQADgJAAgKQgTgYAPglQAEgJAAgKQgRgSghgCQglASghgcQAKhFAEhQQABgFAFgFQAAgKgDgJQgCgGgFgFIAKgKIAKgKQAAgogFgnQAAgGgFgFQAKgUALgTQAEgGAFgFQgMgiASgvQAEgJAAgKQAVgSAxAIQAfADAIA5IABAKQAjAZAtAPQALAPAdgPQAGgcAWgNQAGgEAFgFQAZAeAjAUQAEAfAaAIQAFABAFAAQgBAjAIAaQADAJAAAKQgxAeBPAKQAlAwA/AVQAYA2gVA5QgDAJAAAKQgfgdg7gBQgLATgdABQgHghgPgaQgDgGgFgFQg2gWgQA0QAAAjAOATQABABgFAFQgdAfgyAJQgaATgiALQgnAkgYA1QgCAGgFAFQgjgeAMgfg");
	this.shape.setTransform(29.1,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AiglDQAfADAIA5QABAFAAAFQAjAZAtAPQALAPAdgPQAGgcAWgNQAGgEAFgFQAZAeAjAUQAEAfAaAIQAFABAFAAQgBAjAIAaQADAJAAAKQgxAeBPAKQAlAwA/AVQAYA2gVA5QgDAJAAAKQgfgdg7gBQgLATgdABQgHghgPgaQgDgGgFgFQg2gWgQA0QAAAjAOATQABABgFAFQgdAfgyAJQgaATgiALQgnAkgYA1QgCAGgFAFQgjgeAMgfQADgJAAgKQgTgYAPglQAEgJAAgKQgRgSghgCQglASghgcQAKhFAEhQQABgFAFgFQAAgKgDgJQgCgGgFgFQAFgFAFgFQAFgFAFgFQAAgogFgnQAAgGgFgFQAKgUALgTQAEgGAFgFQgMgiASgvQAEgJAAgKQAVgSAxAIg");
	this.shape_1.setTransform(29.1,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitEJQADgJAAgKQgTgYAPglQAEgJAAgKQgRgSghgCQglASghgcQAKhFAEhQQABgFAFgFQAAgKgDgJQgCgGgFgFIAKgKIAKgKQAAgogFgnQAAgGgFgFQAKgUALgTQAEgGAFgFQgMgiASgvQAEgJAAgKQAVgSAxAIQAfADAIA5IABAKQAjAZAtAPQALAPAdgPQAGgcAWgNQAGgEAFgFQAZAeAjAUQAEAfAaAIQAFABAFAAQgBAjAIAaQADAJAAAKQgxAeBPAKQAlAwA/AVQAYA2gVA5QgDAJAAAKQgfgdg7gBQgLATgdABQgHghgPgaQgDgGgFgFQg2gWgQA0QAAAjAOATQABABgFAFQgdAfgyAJQgaATgiALQgnAkgYA1QgCAGgFAFQgjgeAMgfg");
	this.shape_2.setTransform(29.1,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AitEJQADgJAAgKQgTgYAPglQAEgJAAgKQgRgSghgCQglASghgcQAKhFAEhQQABgFAFgFQAAgKgDgJQgCgGgFgFIAKgKIAKgKQAAgogFgnQAAgGgFgFQAKgUALgTQAEgGAFgFQgMgiASgvQAEgJAAgKQAVgSAxAIQAfADAIA5IABAKQAjAZAtAPQALAPAdgPQAGgcAWgNQAGgEAFgFQAZAeAjAUQAEAfAaAIQAFABAFAAQgBAjAIAaQADAJAAAKQgxAeBPAKQAlAwA/AVQAYA2gVA5QgDAJAAAKQgfgdg7gBQgLATgdABQgHghgPgaQgDgGgFgFQg2gWgQA0QAAAjAOATQABABgFAFQgdAfgyAJQgaATgiALQgnAkgYA1QgCAGgFAFQgjgeAMgfg");
	this.shape_3.setTransform(29.1,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.3,65.3);


(lib.Cordoba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("Aj6EkQgqiOBRhwQATgcAMglQgLgsghgTQgVgMAFgjQAXhDAngxQATgYAdgKIAogKQASgQAeATQACACAAAFQAOAMAaACQAEABAFAFQAKAKALAIQAJAHAKAFQAmACAOAbQADAGAFAFQgKAPgOAJQgNAJgDARQgHAbAIAKQAJANAAAUQAKAKAEAMQAHARAJALQAdAQApAEQAAgFACgBIAQgIQACgBAAgFQAeAKAcAOQACABAAAEQAQALgXAWQgKAKgDARQhCAIg2AWQgQAhgeAWQgOAKgKAPQgkAIgZATQgDADgFAAQgFAdgRATQgNAQgFAaQgvANgwAAQgvAAgwgNg");
	this.shape.setTransform(26.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AhakpQASgQAeATQACACAAAFQAOAMAaACQAEABAFAFQAKAKALAIQAJAHAKAFQAmACAOAbQADAGAFAFQgKAPgOAJQgNAJgDARQgHAbAIAKQAJANAAAUQAKAKAEAMQAHARAJALQAdAQApAEQAAgFACgBQAIgEAIgEQACgBAAgFQAeAKAcAOQACABAAAEQAQALgXAWQgKAKgDARQhCAIg2AWQgQAhgeAWQgOAKgKAPQgkAIgZATQgDADgFAAQgFAdgRATQgNAQgFAaQhfAbhfgbQgqiOBRhwQATgcAMglQgLgsghgTQgVgMAFgjQAXhDAngxQATgYAdgKQAUgFAUgFg");
	this.shape_1.setTransform(26.5,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj6EkQgqiOBRhwQATgcAMglQgLgsghgTQgVgMAFgjQAXhDAngxQATgYAdgKIAogKQASgQAeATQACACAAAFQAOAMAaACQAEABAFAFQAKAKALAIQAJAHAKAFQAmACAOAbQADAGAFAFQgKAPgOAJQgNAJgDARQgHAbAIAKQAJANAAAUQAKAKAEAMQAHARAJALQAdAQApAEQAAgFACgBIAQgIQACgBAAgFQAeAKAcAOQACABAAAEQAQALgXAWQgKAKgDARQhCAIg2AWQgQAhgeAWQgOAKgKAPQgkAIgZATQgDADgFAAQgFAdgRATQgNAQgFAaQgvANgwAAQgvAAgwgNg");
	this.shape_2.setTransform(26.5,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Aj6EkQgqiOBRhwQATgcAMglQgLgsghgTQgVgMAFgjQAXhDAngxQATgYAdgKIAogKQASgQAeATQACACAAAFQAOAMAaACQAEABAFAFQAKAKALAIQAJAHAKAFQAmACAOAbQADAGAFAFQgKAPgOAJQgNAJgDARQgHAbAIAKQAJANAAAUQAKAKAEAMQAHARAJALQAdAQApAEQAAgFACgBIAQgIQACgBAAgFQAeAKAcAOQACABAAAEQAQALgXAWQgKAKgDARQhCAIg2AWQgQAhgeAWQgOAKgKAPQgkAIgZATQgDADgFAAQgFAdgRATQgNAQgFAaQgvANgwAAQgvAAgwgNg");
	this.shape_3.setTransform(26.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,61.1);


(lib.Choco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF33").s().p("AAqIwQgigBgZgJQgygYg8AEQAXgRALgfQABgCAFAAQgNiogeiXQgCgLgFgKQAogTAOgxQABgCAFAAQgYhLgmg/QgDgGgFgFQAOgVAKgbQABgCAFAAIAAg8IAAgKQgKgKgIgMQgCgDAAgFQgVgPgdgFQghgggQgxQgBgEAAgFQgdgVgVgdQgNgjAeglQADgDAAgFIBQgUQAZgeAWgfQADgEAAgFQAbgNAXgRQBfBZB0B3QADACAFAAQgLATgTALQgVgOgdAOQgNAWgPAUQgCADAAAFQgfAIgIAgQARA1AiAjQADACAFAAIAAAoIAAAKQAPAZAWASQADACAAAFQBJAEA5AGQAhARARAhQAOAOgMAQQgCAEAAAFQAQgBgBAVIAFAAQgBAjAJAZQACAFAAAFQgsAkgiAtQgCAEAAAFQAZAtAXAuQACAEAAAFQhOA+gnBjQgDAJAAAKQACAmANAWIgFAAQgMAcgcAMQgtgFgZgZg");
	this.shape.setTransform(29.2,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AhXpNQBfBYB0B3QADADAFAAQgLATgTALQgVgOgdAOQgNAWgPAUQgCADAAAFQgfAIgIAgQARA0AiAjQADADAFAAQAAAUAAAUQAAAFAAAFQAPAZAWASQADACAAAFQBJAEA5AGQAhAQARAiQAOAOgMAQQgCAEAAAFQAQgBgBAVIAFAAQgBAjAJAZQACAFAAAFQgsAkgiAuQgCADAAAFQAZAtAXAuQACAEAAAFQhOA+gnBkQgDAIAAAKQACAmANAWIgFAAQgMAdgcALQgtgFgZgZQgigBgZgJQgygYg8AEQAXgRALgfQABgCAFAAQgNingeiZQgCgKgFgKQAogUAOgwQABgCAFAAQgYhLgmg/QgDgGgFgFQAOgUAKgdQABgBAFAAQAAgeAAgeQAAgFAAgFQgKgKgIgMQgCgDAAgFQgVgPgdgFQghgggQgxQgBgEAAgFQgdgVgVgdQgNgjAeglQADgDAAgFQAngLApgJQAZgeAWggQADgDAAgFQAbgNAXgRg");
	this.shape_1.setTransform(29.2,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqIwQgigBgZgJQgygYg8AEQAXgRALgfQABgCAFAAQgNiogeiXQgCgLgFgKQAogTAOgxQABgCAFAAQgYhLgmg/QgDgGgFgFQAOgVAKgbQABgCAFAAIAAg8IAAgKQgKgKgIgMQgCgDAAgFQgVgPgdgFQghgggQgxQgBgEAAgFQgdgVgVgdQgNgjAeglQADgDAAgFIBQgUQAZgeAWgfQADgEAAgFQAbgNAXgRQBfBZB0B3QADACAFAAQgLATgTALQgVgOgdAOQgNAWgPAUQgCADAAAFQgfAIgIAgQARA1AiAjQADACAFAAIAAAoIAAAKQAPAZAWASQADACAAAFQBJAEA5AGQAhARARAhQAOAOgMAQQgCAEAAAFQAQgBgBAVIAFAAQgBAjAJAZQACAFAAAFQgsAkgiAtQgCAEAAAFQAZAtAXAuQACAEAAAFQhOA+gnBjQgDAJAAAKQACAmANAWIgFAAQgMAcgcAMQgtgFgZgZg");
	this.shape_2.setTransform(29.2,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAqIwQgigBgZgJQgygYg8AEQAXgRALgfQABgCAFAAQgNiogeiXQgCgLgFgKQAogTAOgxQABgCAFAAQgYhLgmg/QgDgGgFgFQAOgVAKgbQABgCAFAAIAAg8IAAgKQgKgKgIgMQgCgDAAgFQgVgPgdgFQghgggQgxQgBgEAAgFQgdgVgVgdQgNgjAeglQADgDAAgFIBQgUQAZgeAWgfQADgEAAgFQAbgNAXgRQBfBZB0B3QADACAFAAQgLATgTALQgVgOgdAOQgNAWgPAUQgCADAAAFQgfAIgIAgQARA1AiAjQADACAFAAIAAAoIAAAKQAPAZAWASQADACAAAFQBJAEA5AGQAhARARAhQAOAOgMAQQgCAEAAAFQAQgBgBAVIAFAAQgBAjAJAZQACAFAAAFQgsAkgiAtQgCAEAAAFQAZAtAXAuQACAEAAAFQhOA+gnBjQgDAJAAAKQACAmANAWIgFAAQgMAcgcAMQgtgFgZgZg");
	this.shape_3.setTransform(29.2,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,118);


(lib.Cesar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgZG6QgDgagHgkQgEgTgQABQADiJgOhBQgHgjgWgNQAMgZgGgRQgBgDAFgFQglgrgYg3IgJgVQAggbAmgNQAJgXgVgkQgDgGgFgFIhBhBQgFgFAAgKQAIglAUgYQAHgJAFgKQAqgNAmgRIAVgdIAJgLQgQhHA3ABQAnAGAwAvQADACAAAFQgMAaAMAOIAKAKQAcAMAgAIQAJBDgZByQgFATgJAKQgQAPgQANQgDACgFAAQgZA9giAxQgGAJgFAKQgHBEgkBWQgCAFAGAVQAFAeAKAWQAEAIAAAKQATABALAJIAAAyIAAAUQAWANgCAlIAAAUQgQgBABAVQAAAFgFAFQgTAGgOAAQgeAAgGgag");
	this.shape.setTransform(17.6,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAOnTQAnAGAwAvQADACAAAFQgMAaAMAOQAFAFAFAFQAcAMAgAIQAJBDgZByQgFATgJAKQgQAPgQANQgDACgFAAQgZA9giAxQgGAJgFAKQgHBEgkBWQgCAFAGAVQAFAeAKAWQAEAIAAAKQATABALAJQAAAZAAAZQAAAKAAAKQAWANgCAlQAAAKAAAKQgQgBABAVQAAAFgFAFQg9ARgIglQgDgagHgkQgEgTgQABQADiJgOhBQgHgjgWgNQAMgZgGgRQgBgDAFgFQglgrgYg3QgEgLgFgKQAggbAmgNQAJgXgVgkQgDgGgFgFQghggggghQgFgFAAgKQAIglAUgYQAHgJAFgKQAqgNAmgRQAKgPALgOQAEgGAFgFQgQhHA3ABg");
	this.shape_1.setTransform(17.6,46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZG6QgDgagHgkQgEgTgQABQADiJgOhBQgHgjgWgNQAMgZgGgRQgBgDAFgFQglgrgYg3IgJgVQAggbAmgNQAJgXgVgkQgDgGgFgFIhBhBQgFgFAAgKQAIglAUgYQAHgJAFgKQAqgNAmgRIAVgdIAJgLQgQhHA3ABQAnAGAwAvQADACAAAFQgMAaAMAOIAKAKQAcAMAgAIQAJBDgZByQgFATgJAKQgQAPgQANQgDACgFAAQgZA9giAxQgGAJgFAKQgHBEgkBWQgCAFAGAVQAFAeAKAWQAEAIAAAKQATABALAJIAAAyIAAAUQAWANgCAlIAAAUQgQgBABAVQAAAFgFAFQgTAGgOAAQgeAAgGgag");
	this.shape_2.setTransform(17.6,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgZG6QgDgagHgkQgEgTgQABQADiJgOhBQgHgjgWgNQAMgZgGgRQgBgDAFgFQglgrgYg3IgJgVQAggbAmgNQAJgXgVgkQgDgGgFgFIhBhBQgFgFAAgKQAIglAUgYQAHgJAFgKQAqgNAmgRIAVgdIAJgLQgQhHA3ABQAnAGAwAvQADACAAAFQgMAaAMAOIAKAKQAcAMAgAIQAJBDgZByQgFATgJAKQgQAPgQANQgDACgFAAQgZA9giAxQgGAJgFAKQgHBEgkBWQgCAFAGAVQAFAeAKAWQAEAIAAAKQATABALAJIAAAyIAAAUQAWANgCAlIAAAUQgQgBABAVQAAAFgFAFQgTAGgOAAQgeAAgGgag");
	this.shape_3.setTransform(17.6,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.3,93.5);


(lib.Cauca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("ACuFZQgJgDgKAAQgOgRACghQACgkgKgYQgsgXgZAXQgIAHgDgRQAFgKADgLQACgEAAgFQgBgUgJgKQhrgKg+gUQAAgPAEgOIAEgEQALgIABgTIgLgTQgEgGgGgCQgQgGgDgRQAZgzhqAdQgEACgFAAQgKgJgMgGQgIgEgKAAQgYgqgigdQgZgWgHglQALgJASADIAGABQAFgKAAgPQAPgKAQgIQAEgCAFAAQAFgKAGgJQAJgLAAgKQAAgFgKgFQABgVAJgOIABgBIABgCQADgCAFAAQAAgFABgFQASgQAVgOQBeAzBpgBQAIAOAOgPQA1gDA3gQIAAgeQAAgFACgDQAIgHAKgFQA/gNA2AuQADACAAAFQgGAVACAGQAIAOAOAFQAMAEAKAKQgLAaAZApQAQAcAUAZQAIAwhEgXIAAAFQgKAFgLADQgTAHgUAAIAAgFQgfAJgMAZQgIAPgJALQAKAFAHAHQADADgCAEQgDAKgFAKQgogFgoAAIAAAFIAAAeIAAAKIAAAeQAaANAYATQAKAIAAAUQAPAdAkAHQAcAFALATQgQgBAFAVQABAFgCABQgPAHgDARQACAgAVAQQATAOASASQglATgjAAQgUAAgTgGg");
	this.shape.setTransform(35.5,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AjzkpQgBAFAAAFQgFAAgDACQgBABAAABQgBAAAAABQgJAOgBAVQAKAFAAAFQAAAKgJALQgGAJgFAKQgFAAgEACQgQAIgPAKQAAAPgFAKIgGgBQgSgDgLAJQAHAlAZAWQAiAdAYAqQAKAAAIAEQAMAGAKAJQAFAAAEgCQBqgdgZAzQADARAQAGQAGACAEAGQAGAJAFAKQgBATgLAIQgDADgBABQgEAOAAAPQA+AUBrAKQAJAKABAUQAAAFgCAEQgDALgFAKQADARAIgHQAZgXAsAXQAKAYgCAkQgCAhAOARQAKAAAJADQA1ARA6geQgSgSgTgOQgVgQgCggQADgRAPgHQACgBgBgFQgFgVAQABQgLgTgcgFQgkgHgPgdQAAgUgKgIQgYgTgagNQAAgPAAgPQAAgFAAgFQAAgPAAgPIAAgFQAoAAAoAFQAFgKADgKQACgEgDgDQgHgHgKgFQAJgLAIgPQAMgZAfgJIAAAFQAUAAATgHQALgDAKgFIAAgFQBEAXgIgwQgUgZgQgcQgZgpALgaQgKgKgMgEQgOgFgIgOQgCgGAGgVQAAgFgDgCQg2gug/ANQgKAFgIAHQgCADAAAFQAAAPAAAPQg3AQg1ADQgOAPgIgOQhpABhegzQgVAOgSAQg");
	this.shape_1.setTransform(35.5,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACuFZQgJgDgKAAQgOgRACghQACgkgKgYQgsgXgZAXQgIAHgDgRQAFgKADgLQACgEAAgFQgBgUgJgKQhrgKg+gUQAAgPAEgOIAEgEQALgIABgTIgLgTQgEgGgGgCQgQgGgDgRQAZgzhqAdQgEACgFAAQgKgJgMgGQgIgEgKAAQgYgqgigdQgZgWgHglQALgJASADIAGABQAFgKAAgPQAPgKAQgIQAEgCAFAAQAFgKAGgJQAJgLAAgKQAAgFgKgFQABgVAJgOIABgBIABgCQADgCAFAAQAAgFABgFQASgQAVgOQBeAzBpgBQAIAOAOgPQA1gDA3gQIAAgeQAAgFACgDQAIgHAKgFQA/gNA2AuQADACAAAFQgGAVACAGQAIAOAOAFQAMAEAKAKQgLAaAZApQAQAcAUAZQAIAwhEgXIAAAFQgKAFgLADQgTAHgUAAIAAgFQgfAJgMAZQgIAPgJALQAKAFAHAHQADADgCAEQgDAKgFAKQgogFgoAAIAAAFIAAAeIAAAKIAAAeQAaANAYATQAKAIAAAUQAPAdAkAHQAcAFALATQgQgBAFAVQABAFgCABQgPAHgDARQACAgAVAQQATAOASASQglATgjAAQgUAAgTgGg");
	this.shape_2.setTransform(35.5,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ACuFZQgJgDgKAAQgOgRACghQACgkgKgYQgsgXgZAXQgIAHgDgRQAFgKADgLQACgEAAgFQgBgUgJgKQhrgKg+gUQAAgPAEgOIAEgEQALgIABgTIgLgTQgEgGgGgCQgQgGgDgRQAZgzhqAdQgEACgFAAQgKgJgMgGQgIgEgKAAQgYgqgigdQgZgWgHglQALgJASADIAGABQAFgKAAgPQAPgKAQgIQAEgCAFAAQAFgKAGgJQAJgLAAgKQAAgFgKgFQABgVAJgOIABgBIABgCQADgCAFAAQAAgFABgFQASgQAVgOQBeAzBpgBQAIAOAOgPQA1gDA3gQIAAgeQAAgFACgDQAIgHAKgFQA/gNA2AuQADACAAAFQgGAVACAGQAIAOAOAFQAMAEAKAKQgLAaAZApQAQAcAUAZQAIAwhEgXIAAAFQgKAFgLADQgTAHgUAAIAAgFQgfAJgMAZQgIAPgJALQAKAFAHAHQADADgCAEQgDAKgFAKQgogFgoAAIAAAFIAAAeIAAAKIAAAeQAaANAYATQAKAIAAAUQAPAdAkAHQAcAFALATQgQgBAFAVQABAFgCABQgPAHgDARQACAgAVAQQATAOASASQglATgjAAQgUAAgTgGg");
	this.shape_3.setTransform(35.5,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.1,70.2);


(lib.Casanare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AmyE2QgBgEgEgGQAAgFgDgDQgxgzgcgVIAAhZQAAAEADACQACADAFAAQAAgFADgCIAEgGIAFgEIAGgFIAEgGIAGgEQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFQAAgFACgCIAGgFQACgDAAgFQAKAAAIgEIAEgCIAQgIIADgBIAwgJQABAAAAgFQAFAAACgCIAGgGIAEgFIAFgDIAQgIIAFgDIAEgGQADgCAAgFQAUAAATgEIADgDQADgDAFAAIAAgKIAAgKIAAgKIAAgKQAAgFADgDIAEgFQADgCAAgFIAAgKQAAgFgCgBIgQgIIgEgDIgGgGIgEgFQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFACgCIAGgGQACgCAAgFQDEg2DpgLIDIgKIAAgFIC0AAIAABuIgCADQgDAFgDADIgCACIAAgDQgFAAgCACQgVAjgWAhQhAAQg4AYQgZAZgjAPQAAAFgCADQgQAZgMAaQgrANgbAbQAAAFgCADQgRAXgLAdQgzANgnAbQgsAKgZAeQgvAOgrAQQAAAFgCACQgQAPgMASQhBAZhLAPgAIHgiIABAAIAAAPIgBgPg");
	this.shape.setTransform(52,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AIIk1IAABmQgHAJgDAGQgBACgBABQgDAAgCACQgVAjgWAhQg/AQg5AYQgZAZgjAPQAAAFgCAEQgPAXgNAbQgqANgcAbQAAAFgCADQgSAWgKAeQgzAOgnAaQgtAKgYAeQguAOgsAQQAAAFgDADQgPAOgMASQhBAZhLAPIimAAQAAgEgEgGQAAgFgDgCQgxgzgcgWIAAhZQAAAEACADQADACAFAAQAAgFACgCQADgDACgCQADgDACgCQADgDACgCQADgDACgCQADgDACgCQADgDAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAFAAACgCQADgDAAgFQAAgFACgCQADgDACgCQADgDAAgFQAKAAAIgEQACgBACgBQAIgEAIgEQACgBABAAQAYgFAYgEQABAAAAgFQAFAAACgDQADgCACgDQADgCACgDQADgCACgBQAIgEAIgEQACgBACgDQADgCACgDQADgCAAgFQAUAAATgEQABgBACgDQADgCAFAAQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFACgDQADgCACgDQADgCAAgFQAAgFAAgFQAAgFgCgBQgIgEgIgEQgCgBgDgDQgCgCgDgDQgCgCgDgDQgCgCgFAAQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFAAgFQAAgFACgDQADgCACgDQADgCAAgFQDEg2DpgLQBkgFBkgFIAAgFg");
	this.shape_1.setTransform(52,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmyE2QgBgEgEgGQAAgFgDgDQgxgzgcgVIAAhZQAAAEADACQACADAFAAQAAgFADgCIAEgGIAFgEIAGgFIAEgGIAGgEQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFQAAgFACgCIAGgFQACgDAAgFQAKAAAIgEIAEgCIAQgIIADgBIAwgJQABAAAAgFQAFAAACgCIAGgGIAEgFIAFgDIAQgIIAFgDIAEgGQADgCAAgFQAUAAATgEIADgDQADgDAFAAIAAgKIAAgKIAAgKIAAgKQAAgFADgDIAEgFQADgCAAgFIAAgKQAAgFgCgBIgQgIIgEgDIgGgGIgEgFQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFACgCIAGgGQACgCAAgFQDEg2DpgLIDIgKIAAgFIC0AAIAABmIgKAQIgCACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgVAjgWAhQhAAQg4AYQgZAZgjAPQAAAFgCADQgQAZgMAaQgrANgbAbQAAAFgCADQgRAXgLAdQgzANgnAbQgsAKgZAeQgvAOgrAQQAAAFgCACQgQAPgMASQhBAZhLAPg");
	this.shape_2.setTransform(52,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AmyE2QgBgEgEgGQAAgFgDgDQgxgzgcgVIAAhZQAAAEADACQACADAFAAQAAgFADgCIAEgGIAFgEIAGgFIAEgGIAGgEQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFQAAgFACgCIAGgFQACgDAAgFQAKAAAIgEIAEgCIAQgIIADgBIAwgJQABAAAAgFQAFAAACgCIAGgGIAEgFIAFgDIAQgIIAFgDIAEgGQADgCAAgFQAUAAATgEIADgDQADgDAFAAIAAgKIAAgKIAAgKIAAgKQAAgFADgDIAEgFQADgCAAgFIAAgKQAAgFgCgBIgQgIIgEgDIgGgGIgEgFQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFACgCIAGgGQACgCAAgFQDEg2DpgLIDIgKIAAgFIC0AAIAABmQgHACgEAIIgCAIIgEACQgVAjgWAhQhAAQg4AYQgZAZgjAPQAAAFgCADQgQAZgMAaQgrANgbAbQAAAFgCADQgRAXgLAdQgzANgnAbQgsAKgZAeQgvAOgrAQQAAAFgCACQgQAPgMASQhBAZhLAPgAICiFIABAGIABAUIgCgag");
	this.shape_3.setTransform(52,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AmyE2QgBgEgEgGQAAgFgDgDQgxgzgcgVIAAhZQAAAEADACQACADAFAAQAAgFADgCIAEgGIAFgEIAGgFIAEgGIAGgEQACgDAAgFIAAgKIAAgKIAAgKIAAgKIAAgKQAFAAADgDQACgCAAgFQAAgFACgCIAGgFQACgDAAgFQAKAAAIgEIAEgCIAQgIIADgBIAwgJQABAAAAgFQAFAAACgCIAGgGIAEgFIAFgDIAQgIIAFgDIAEgGQADgCAAgFQAUAAATgEIADgDQADgDAFAAIAAgKIAAgKIAAgKIAAgKQAAgFADgDIAEgFQADgCAAgFIAAgKQAAgFgCgBIgQgIIgEgDIgGgGIgEgFQgDgCgFAAIAAgKIAAgKIAAgKIAAgKIAAgKQAAgFACgCIAGgGQACgCAAgFQDEg2DpgLIDIgKIAAgFIC0AAIAABtIgCACIgIAOIAAgFQgFAAgCACQgVAjgWAhQhAAQg4AYQgZAZgjAPQAAAFgCADQgQAZgMAaQgrANgbAbQAAAFgCADQgRAXgLAdQgzANgnAbQgsAKgZAeQgvAOgrAQQAAAFgCACQgQAPgMASQhBAZhLAPgAIHgoIAAAAIABABIAAAUIgBgVg");
	this.shape_4.setTransform(52,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,62);


(lib.Caquetá = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("AG6IJIgEgEQgIgHgKgFQhJgBhDgJQAAAFgCABIgQAIQgCABAAAFQhIgdhNgQQgBAAAAgFQhjgNhGgRQgCgbgbAEQgnAGAIghQhLABgQgJQgEgCgFAAIgUgUQgXgVANgJQgXgvg5gLQgKgCgKAAQAGgVgDgHQgQgYgbgIIgFAFQgIgRgbACQAAgKgEgIQgGgMgHgLQgDgEAAgFQhWgriGgbQAHgVgOgGQgVgLgggCQgTgLgPgPQgOgPgMgSQAFgFABgGQAFgSAGgNQADgDAAgFQALgJASgDQAVgDAUgFQAKgeAcgPQARgJAFgaQAAgFACgCQADgDAEgBQALgEAKgFIAAgKQAAgFADgDQAIgLATgBQAAgKAFgEQAMgJACgRIABgKQAFAAADgCIAEgEQAIgEAKAAQAGgsAdgWQATgOAGgeIArgLQAYgHADgWQARgDgHgbQgLgvAfgDQBFgdAZA5QABACAFAAQAAAKgEAIQgFANgFARQgBACgFAAIAAAeIAAA8IAKAKQAJAKAGATQAAABAFAAQgFAKADAFQAJANgHAgQAFAAACADIAFAGIAGAMQACAEAAAFIB4AoQAAAFACABQAIAEAJADQALACAKAFQA0AuA5gkQBGAoAnBHIAVAmQAUAKAPAPQAQAOATALQAFAFAFABQAZAEAZAAQAYgVAQgZQANgUAbgDQAXgNBCAXIAVAJQAFAKAHAJQAMAQAQAPQAAAFACADIADACQgBAVAPAEQABAAAAAFQBhAhAzBPQACADAAAFQAsAWAlAaQAJAHAKAFQgLAagwAjQgQANgFAaQgYAVg4gGIAAAFQgnAfgRAsQgMAhgqgIQgPgfgYARQgSAMgDAWQgKAAgIgEg");
	this.shape.setTransform(79,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AlxoCQBFgdAZA5QABACAFAAQAAAKgEAIQgGANgFASQAAABgFAAQAAAPAAAPQAAAeAAAeQAFAFAFAFQAJALAFASQABABAFAAQgFAKADAFQAJANgHAgQAFAAACADQADACACAEQADAGADAGQACAEAAAFQA8AUA8AUQAAAFACABQAIAEAKADQAKACAKAFQA0AuA5gkQBGAoAnBHQALATAKATQAUAKAPAPQAQAOATALQAFAFAFABQAZAEAZAAQAXgVARgZQANgTAbgEQAXgNBDAXQAKAEAKAFQAFAKAHAJQAMARAQAOQAAAFADADIACACQgBAWAPADQABAAAAAFQBhAhAzBPQACADAAAFQAsAWAlAbQAJAGAKAFQgLAagwAkQgRANgEAZQgYAVg4gGIAAAFQgnAfgRAtQgLAggrgIQgPgfgYARQgSAMgDAWQgKAAgIgEQgCgBgCgCQgIgIgKgFQhJgBhDgJQAAAFgCABQgIAEgIAEQgCABAAAFQhIgchNgRQgBAAAAgFQhigNhHgRQgDgbgaAEQgnAGAIghQhLABgQgJQgEgCgFAAQgKgKgKgKQgXgVANgJQgXgvg6gLQgJgCgKAAQAGgVgEgGQgPgZgbgIIgFAFQgIgRgbACQAAgKgEgIQgGgMgIgLQgCgEAAgFQhWgriGgbQAGgVgNgGQgVgKgggDQgTgLgPgPQgOgPgMgSQAFgFABgGQAEgSAHgMQADgEAAgFQALgJASgDQAVgDAUgFQAKgeAbgOQASgKAFgaQAAgFACgCQADgDAEgBQALgEAKgFQAAgFAAgFQAAgFACgDQAJgLATgBQAAgKAFgDQAMgKACgRQABgFAAgFQAFAAACgCQADgDACgBQAIgEAKAAQAGgsAdgWQATgOAGgeQAXgGATgFQAZgHADgWQARgDgHgbQgMguAggEg");
	this.shape_1.setTransform(79,52.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AG6IJIgEgEQgIgHgKgFQhJgBhDgJQAAAFgCABIgQAIQgCABAAAFQhIgdhNgQQgBAAAAgFQhjgNhGgRQgCgbgbAEQgnAGAIghQhLABgQgJQgEgCgFAAIgUgUQgXgVANgJQgXgvg5gLQgKgCgKAAQAGgVgDgHQgQgYgbgIIgFAFQgIgRgbACQAAgKgEgIQgGgMgHgLQgDgEAAgFQhWgriGgbQAHgVgOgGQgVgLgggCQgTgLgPgPQgOgPgMgSQAFgFABgGQAFgSAGgNQADgDAAgFQALgJASgDQAVgDAUgFQAKgeAcgPQARgJAFgaQAAgFACgCQADgDAEgBQALgEAKgFIAAgKQAAgFADgDQAIgLATgBQAAgKAFgEQAMgJACgRIABgKQAFAAADgCIAEgEQAIgEAKAAQAGgsAdgWQATgOAGgeIArgLQAYgHADgWQARgDgHgbQgLgvAfgDQBFgdAZA5QABACAFAAQAAAKgEAIQgFANgFARQgBACgFAAIAAAeIAAA8IAKAKQAJAKAGATQAAABAFAAQgFAKADAFQAJANgHAgQAFAAACADIAFAGIAGAMQACAEAAAFIB4AoQAAAFACABQAIAEAJADQALACAKAFQA0AuA5gkQBGAoAnBHIAVAmQAUAKAPAPQAQAOATALQAFAFAFABQAZAEAZAAQAYgVAQgZQANgUAbgDQAXgNBCAXIAVAJQAFAKAHAJQAMAQAQAPQAAAFACADIADACQgBAVAPAEQABAAAAAFQBhAhAzBPQACADAAAFQAsAWAlAaQAJAHAKAFQgLAagwAjQgQANgFAaQgYAVg4gGIAAAFQgnAfgRAsQgMAhgqgIQgPgfgYARQgSAMgDAWQgKAAgIgEg");
	this.shape_2.setTransform(79,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AG6IJIgEgEQgIgHgKgFQhJgBhDgJQAAAFgCABIgQAIQgCABAAAFQhIgdhNgQQgBAAAAgFQhjgNhGgRQgCgbgbAEQgnAGAIghQhLABgQgJQgEgCgFAAIgUgUQgXgVANgJQgXgvg5gLQgKgCgKAAQAGgVgDgHQgQgYgbgIIgFAFQgIgRgbACQAAgKgEgIQgGgMgHgLQgDgEAAgFQhWgriGgbQAHgVgOgGQgVgLgggCQgTgLgPgPQgOgPgMgSQAFgFABgGQAFgSAGgNQADgDAAgFQALgJASgDQAVgDAUgFQAKgeAcgPQARgJAFgaQAAgFACgCQADgDAEgBQALgEAKgFIAAgKQAAgFADgDQAIgLATgBQAAgKAFgEQAMgJACgRIABgKQAFAAADgCIAEgEQAIgEAKAAQAGgsAdgWQATgOAGgeIArgLQAYgHADgWQARgDgHgbQgLgvAfgDQBFgdAZA5QABACAFAAQAAAKgEAIQgFANgFARQgBACgFAAIAAAeIAAA8IAKAKQAJAKAGATQAAABAFAAQgFAKADAFQAJANgHAgQAFAAACADIAFAGIAGAMQACAEAAAFIB4AoQAAAFACABQAIAEAJADQALACAKAFQA0AuA5gkQBGAoAnBHIAVAmQAUAKAPAPQAQAOATALQAFAFAFABQAZAEAZAAQAYgVAQgZQANgUAbgDQAXgNBCAXIAVAJQAFAKAHAJQAMAQAQAPQAAAFACADIADACQgBAVAPAEQABAAAAAFQBhAhAzBPQACADAAAFQAsAWAlAaQAJAHAKAFQgLAagwAjQgQANgFAaQgYAVg4gGIAAAFQgnAfgRAsQgMAhgqgIQgPgfgYARQgSAMgDAWQgKAAgIgEg");
	this.shape_3.setTransform(79,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,105);


(lib.Caldas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AifBgQgDgRgPgHQgCgBAAgFQgFgKgDgLQgCgEAAgFQAjgZgQgXIgJgLQABgUALgIQADgCAFAAIAogKQAEgfAbgIQAEgBAFAAQAaAYAWAcQACADAAAFQAlgHAggNQAJgvAzgDQAegNAxARQABABAAAFQARAagNAjQgEAJAAAKQgsAVhCgBQgPAhgtAGIgnAeQgFAKgCAKQgDAKAAAKQgVAOgaAAQghAAgogYg");
	this.shape.setTransform(19,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ABkhxQAegNAxARQABABAAAFQARAagNAjQgEAJAAAKQgsAVhCgBQgPAhgtAGQgTAPgUAPQgFAKgCAKQgDAKAAAKQgxAhhHgrQgDgRgPgHQgCgBAAgFQgFgKgDgLQgCgEAAgFQAjgZgQgXQgEgGgFgFQABgUALgIQADgCAFAAQAUgFAUgFQAEgfAbgIQAEgBAFAAQAaAYAWAcQACADAAAFQAlgHAggNQAJgvAzgDg");
	this.shape_1.setTransform(19,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifBgQgDgRgPgHQgCgBAAgFQgFgKgDgLQgCgEAAgFQAjgZgQgXIgJgLQABgUALgIQADgCAFAAIAogKQAEgfAbgIQAEgBAFAAQAaAYAWAcQACADAAAFQAlgHAggNQAJgvAzgDQAegNAxARQABABAAAFQARAagNAjQgEAJAAAKQgsAVhCgBQgPAhgtAGIgnAeQgFAKgCAKQgDAKAAAKQgVAOgaAAQghAAgogYg");
	this.shape_2.setTransform(19,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AifBgQgDgRgPgHQgCgBAAgFQgFgKgDgLQgCgEAAgFQAjgZgQgXIgJgLQABgUALgIQADgCAFAAIAogKQAEgfAbgIQAEgBAFAAQAaAYAWAcQACADAAAFQAlgHAggNQAJgvAzgDQAegNAxARQABABAAAFQARAagNAjQgEAJAAAKQgsAVhCgBQgPAhgtAGIgnAeQgFAKgCAKQgDAKAAAKQgVAOgaAAQghAAgogYg");
	this.shape_3.setTransform(19,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,24);


(lib.Boyacá = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AAjFjQgFgFgKAAQgUgZgVgXQgIgHgKgFQAFgogKgWQgFgNAAgPQgUgPgNgUQgHgKAAgPQgpgJgdgVQgUgKgYAlQgGAIgKAFQgwgNgqgRQgIgWACgcQACgVgQABQgdgbhHAHQACglAMgZQAGgMAAgPQgHgMAtAaQACABAAAFQAtgKAFAeQBzBlBzgqQgRhRBDACQAOAPgMAQQgHAIgFAKQgIAmAwgSQAAgKADgJQACgGAEgFQATAAALgKIAKgJIA8gKQAogZAWgsQADgGAFgFQAcgCABgcIABgUQAMgXAcgGIAKgBQAGgYAEgSQAEgTAQABIAAgeIAAgUIAUgKIAUgKQAJgaAXgKQAIgEAKAAQAdgOAWAMQAEACAFAAQAAA8gRAkQgGAPgRgBIAAAUIAAAUIgfATIgTALQgMAbgQAYQgHAJgFAKIACAfQACAUAQgBQgGAXgMASQgHAJgFAJQAuAIAMAqQACAFAAAFQACAbgWgCQgKAAgKgFQgUAZgTAaQgGAJgFAKQgwATgqgTQgKAPgMAMQgIAIgKAFQAMAbgEAHQgDAGAFAKQgBAYgSAIQgGADgFAFQgPAegNAlQgCAIgKAFQgFAIgHAAQgKAAgNgNg");
	this.shape.setTransform(43,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AFylnQAegOAVAMQAEACAFAAQAAA8gRAkQgGAPgRgBQAAAKAAAKQAAAKAAAKQgPAKgPAJQgKAGgKAFQgMAbgQAYQgHAJgFAKQABATABAMQACAUAQgBQgHAXgLASQgHAJgFAJQAvAIALAqQACAFAAAFQACAbgVgCQgLAAgKgFQgUAZgSAaQgHAJgFAKQgvATgrgTQgKAPgMAMQgIAIgKAFQAMAbgEAHQgDAGAFAKQgBAYgSAIQgGADgFAFQgPAegMAlQgDAIgKAFQgLASgYgXQgFgFgKAAQgUgZgWgXQgHgHgKgFQAFgogKgWQgFgNAAgPQgUgPgNgUQgHgKAAgPQgqgJgcgVQgUgKgZAlQgFAIgKAFQgwgNgqgRQgIgWACgcQACgVgQABQgdgbhHAHQACglAMgZQAGgMAAgPQgHgMAtAaQACABAAAFQAsgKAGAeQBzBlBzgqQgRhRBDACQAPAPgNAQQgHAIgFAKQgJAmAxgSQAAgKADgJQACgGAEgFQATAAALgKQAFgEAFgFQAegFAegFQAogZAWgsQADgGAFgFQAcgCACgcQAAgKAAgKQAMgXAcgGQAFgBAFAAQAHgYADgSQAEgTAQABQAAgPAAgPQAAgKAAgKQAKgFAKgFQAKgFAKgFQAKgaAWgKQAIgEAKAAg");
	this.shape_1.setTransform(43,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjFjQgFgFgKAAQgUgZgVgXQgIgHgKgFQAFgogKgWQgFgNAAgPQgUgPgNgUQgHgKAAgPQgpgJgdgVQgUgKgYAlQgGAIgKAFQgwgNgqgRQgIgWACgcQACgVgQABQgdgbhHAHQACglAMgZQAGgMAAgPQgHgMAtAaQACABAAAFQAtgKAFAeQBzBlBzgqQgRhRBDACQAOAPgMAQQgHAIgFAKQgIAmAwgSQAAgKADgJQACgGAEgFQATAAALgKIAKgJIA8gKQAogZAWgsQADgGAFgFQAcgCABgcIABgUQAMgXAcgGIAKgBQAGgYAEgSQAEgTAQABIAAgeIAAgUIAUgKIAUgKQAJgaAXgKQAIgEAKAAQAdgOAWAMQAEACAFAAQAAA8gRAkQgGAPgRgBIAAAUIAAAUIgfATIgTALQgMAbgQAYQgHAJgFAKIACAfQACAUAQgBQgGAXgMASQgHAJgFAJQAuAIAMAqQACAFAAAFQACAbgWgCQgKAAgKgFQgUAZgTAaQgGAJgFAKQgwATgqgTQgKAPgMAMQgIAIgKAFQAMAbgEAHQgDAGAFAKQgBAYgSAIQgGADgFAFQgPAegNAlQgCAIgKAFQgFAIgHAAQgKAAgNgNg");
	this.shape_2.setTransform(43,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,73.6);


(lib.Bolivar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AB1HCIABgKQACghggADQgcAggCgqQgPgZAggcQADgCAAgFQgFgUgJgSQgBgCgFAAIAAgeIAAgKQgkgeghgeQgDggAgACQAHghAUgTQADgDAAgFQgPgtAAg3IAFAAQABgtgdgRQgCgCAAgFIgxgUQgOgfgagTIAAgyIAAgKQgdglgzgNQgTgkgzgEQARgWgZgVQgCgCAAgFQgwgIAcggQgPgVgKgcQAAgBgFAAQgRhHAhgsQAEgFAKAAQAhALAsAzQADADAAAFQAjAEAZAQIAJAoIABAKIAeAeQAEBWAOBKQACAKAAAKIA8AUQAZAvAsgRQAsAkAuAiIBQAUQAXARALAfQABABAFAAQgCBDAUAsQACAEAAAFIgKA8IAAAKQgQgBABAVIgFAAIAAA8IAAAKQAQgBgBAVIAFAAQgIAUgCAoIAAAKQgQgBABAVIgFAAQAAAjgJAaQgBAEAAAFQgtA3hLAZQgUgyAJgog");
	this.shape.setTransform(29.8,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkFobQAhALAsAzQADADAAAFQAjAEAZAQQAFAUAEAUQABAFAAAFQAPAOAPAQQAEBVAOBLQACAKAAAKQAeAKAeAKQAZAvAsgRQAsAkAuAiQAnAKApAKQAXARALAgQABAAAFAAQgCBCAUAtQACAEAAAFQgFAegFAeQAAAFAAAFQgQgBABAVIgFAAQAAAeAAAeQAAAFAAAFQAQgBgBAVIAFAAQgIAUgCAoQAAAFAAAFQgQgBABAVIgFAAQAAAjgJAaQgBAEAAAFQgtA3hLAZQgUgxAJgpQABgFAAgFQACggggACQgcAggCgqQgPgZAggcQADgCAAgFQgFgUgJgSQgBgCgFAAQAAgPAAgPQAAgFAAgFQgkgeghgeQgDggAgACQAHghAUgTQADgDAAgFQgPgtAAg3IAFAAQABgtgdgSQgCgBAAgFQgYgKgZgKQgOgfgagTQAAgZAAgZQAAgFAAgFQgdglgzgNQgTglgzgDQARgXgZgUQgCgCAAgFQgwgIAcggQgPgVgKgcQAAgBgFAAQgRhIAhgrQAEgFAKAAg");
	this.shape_1.setTransform(29.8,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB1HCIABgKQACghggADQgcAggCgqQgPgZAggcQADgCAAgFQgFgUgJgSQgBgCgFAAIAAgeIAAgKQgkgeghgeQgDggAgACQAHghAUgTQADgDAAgFQgPgtAAg3IAFAAQABgtgdgRQgCgCAAgFIgxgUQgOgfgagTIAAgyIAAgKQgdglgzgNQgTgkgzgEQARgWgZgVQgCgCAAgFQgwgIAcggQgPgVgKgcQAAgBgFAAQgRhHAhgsQAEgFAKAAQAhALAsAzQADADAAAFQAjAEAZAQIAJAoIABAKIAeAeQAEBWAOBKQACAKAAAKIA8AUQAZAvAsgRQAsAkAuAiIBQAUQAXARALAfQABABAFAAQgCBDAUAsQACAEAAAFIgKA8IAAAKQgQgBABAVIgFAAIAAA8IAAAKQAQgBgBAVIAFAAQgIAUgCAoIAAAKQgQgBABAVIgFAAQAAAjgJAaQgBAEAAAFQgtA3hLAZQgUgyAJgog");
	this.shape_2.setTransform(29.8,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AB1HCIABgKQACghggADQgcAggCgqQgPgZAggcQADgCAAgFQgFgUgJgSQgBgCgFAAIAAgeIAAgKQgkgeghgeQgDggAgACQAHghAUgTQADgDAAgFQgPgtAAg3IAFAAQABgtgdgRQgCgCAAgFIgxgUQgOgfgagTIAAgyIAAgKQgdglgzgNQgTgkgzgEQARgWgZgVQgCgCAAgFQgwgIAcggQgPgVgKgcQAAgBgFAAQgRhHAhgsQAEgFAKAAQAhALAsAzQADADAAAFQAjAEAZAQIAJAoIABAKIAeAeQAEBWAOBKQACAKAAAKIA8AUQAZAvAsgRQAsAkAuAiIBQAUQAXARALAfQABABAFAAQgCBDAUAsQACAEAAAFIgKA8IAAAKQgQgBABAVIgFAAIAAA8IAAAKQAQgBgBAVIAFAAQgIAUgCAoIAAAKQgQgBABAVIgFAAQAAAjgJAaQgBAEAAAFQgtA3hLAZQgUgyAJgog");
	this.shape_3.setTransform(29.8,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.6,108);


(lib.Atlantico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Ag/AxQAHgVgHgHQgKgMAAgTQAqgcAngdQADgDAFAAQAUgkAYAiQABACAFAAQAWBKgqA6QgHAKgDARQg7gJgogfg");
	this.shape.setTransform(7.4,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAQhGQAUgkAYAiQABACAFAAQAWBKgqA6QgHAKgDARQg7gJgogfQAHgVgHgHQgKgMAAgTQAqgcAngdQADgDAFAAg");
	this.shape_1.setTransform(7.4,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/AxQAHgVgHgHQgKgMAAgTQAqgcAngdQADgDAFAAQAUgkAYAiQABACAFAAQAWBKgqA6QgHAKgDARQg7gJgogfg");
	this.shape_2.setTransform(7.4,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag/AxQAHgVgHgHQgKgMAAgTQAqgcAngdQADgDAFAAQAUgkAYAiQABACAFAAQAWBKgqA6QgHAKgDARQg7gJgogfg");
	this.shape_3.setTransform(7.4,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,17.9);


(lib.Arauca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AFMCBQgSgLgPgQQgGgIgKgFQg1gMg5gIQkyA1lDgDQgGgKAAgKQAAgFAGgFQAPgPAKgPQAJgLAPABQARgxAVgvQAOggATgfQCggLCqALIATgUQAhAEAQgOQAEgOAYARQADACAAAFQAvgCAWAWQAjgMA3AMQBRBPBPBQQAgAhATAvQgdASggAAQghAAglgSg");
	this.shape.setTransform(46.3,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AA/iMQACgOAZARQADACAAAFQAvgCAXAWQAigMA4AMQBQBPBQBQQAgAhASAvQg5AlhJglQgUgLgOgQQgGgIgKgFQg1gMg5gIQkyA1lEgDQgFgKAAgKQAAgFAFgFQAPgPALgPQAIgLAQABQARgxAVgvQAOggASgfQChgLCpALQAKgKAKgKQAhAEARgOg");
	this.shape_1.setTransform(46.3,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFMCBQgSgLgPgQQgGgIgKgFQg1gMg5gIQkyA1lDgDQgGgKAAgKQAAgFAGgFQAPgPAKgPQAJgLAPABQARgxAVgvQAOggATgfQCggLCqALIATgUQAhAEAQgOQAEgOAYARQADACAAAFQAvgCAWAWQAjgMA3AMQBRBPBPBQQAgAhATAvQgdASggAAQghAAglgSg");
	this.shape_2.setTransform(46.3,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AFMCBQgSgLgPgQQgGgIgKgFQg1gMg5gIQkyA1lDgDQgGgKAAgKQAAgFAGgFQAPgPAKgPQAJgLAPABQARgxAVgvQAOggATgfQCggLCqALIATgUQAhAEAQgOQAEgOAYARQADACAAAFQAvgCAWAWQAjgMA3AMQBRBPBPBQQAgAhATAvQgdASggAAQghAAglgSg");
	this.shape_3.setTransform(46.3,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.5,29.5);


(lib.Antioquia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AiaHlQgYgWgJglQgCgGgFgFIAFgpQAAgEgFgFQgLgYgRgSQgCgDAAgFQg6gqhwAMQgUgQAAgiIAAgUQgYgfgVggQgFgHAAgKQAPgeARgdQADgGAFgFQAqgEAwgQQg5iPiFh0QAigcAYAVQACACAAAFQAdgRASgZQADgDAAgFQgDg+gUgvQgCgGgFgFQAOgPgOgPIgKgKQAIggAqACQAPgjAtgFQArAIAjA/QACAEAAAFQhcCAAHCOQAAAFgFAFQAVAcAUAfIAJALQBMAGBeAEQAzgnAbg+QACgEAAgFQAagOAhgGQAEgaAQgOIAKgKQAtAAAFgoQBmgxBiAdQAOAjANAkQADAJAAAKQgOAfgEAnIgCAUIALATIAJALIAoAKQAFAoAJAmQABAGAFAFQASAQAqgGQAeg0AyANQAFAFACAGQADAIAAAKQgaANgUAWQgEAFgKAAQAAAKgDAJQgCAGgFAFIhQAyQgKAZgEAaQgBAEAFAFQgYAjgaAiIgKALQAAAUAEATQABAGAFAFQgQAigNArQgBADgKAAQg+ANg6ARQgTAogzAKQgDgRgMgKQgFgDAAgKQgegZhFAPQAGApgjAEIgBAFQgYAKgWAAQgXAAgVgKg");
	this.shape.setTransform(52.5,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AlYnuQArAIAjA/QACAEAAAFQhcCAAHCOQAAAFgFAFQAVAcAUAfQAEAGAFAFQBMAGBeAEQAzgnAbg+QACgEAAgFQAagOAhgGQAFgaAPgOQAFgFAFgFQAtAAAFgoQBngxBhAdQAPAjAMAkQADAJAAAKQgNAfgFAnQgCAKAAAKQAFAKAGAJQAEAGAFAFQAUAFAUAFQAFAoAIAmQACAGAFAFQASAQAqgGQAeg0AyANQAFAFACAGQADAIAAAKQgbANgSAWQgFAFgKAAQAAAKgDAJQgCAGgFAFQgoAZgoAZQgKAZgEAaQgBAEAFAFQgYAjgaAiQgFAGgFAFQAAAUAEATQABAGAFAFQgPAigOArQgBADgKAAQg+ANg6ARQgUAogyAKQgDgRgMgKQgFgDAAgKQgegZhFAPQAGApgkAEQAAAAAAAFQgwAUgqgUQgYgWgKglQgBgGgFgFQADghACgIQAAgEgFgFQgLgYgRgSQgCgDAAgFQg6gqhwAMQgUgQAAgiQAAgKAAgKQgYgfgWggQgEgHAAgKQAPgeAQgdQAEgGAFgFQApgEAxgQQg5iPiFh0QAigcAXAVQADACAAAFQAcgRATgZQADgDAAgFQgDg+gUgvQgCgGgFgFQAOgPgOgPQgFgFgFgFQAIggAqACQAPgjAtgFg");
	this.shape_1.setTransform(52.5,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiaHlQgYgWgJglQgCgGgFgFIAFgpQAAgEgFgFQgLgYgRgSQgCgDAAgFQg6gqhwAMQgUgQAAgiIAAgUQgYgfgVggQgFgHAAgKQAPgeARgdQADgGAFgFQAqgEAwgQQg5iPiFh0QAigcAYAVQACACAAAFQAdgRASgZQADgDAAgFQgDg+gUgvQgCgGgFgFQAOgPgOgPIgKgKQAIggAqACQAPgjAtgFQArAIAjA/QACAEAAAFQhcCAAHCOQAAAFgFAFQAVAcAUAfIAJALQBMAGBeAEQAzgnAbg+QACgEAAgFQAagOAhgGQAEgaAQgOIAKgKQAtAAAFgoQBmgxBiAdQAOAjANAkQADAJAAAKQgOAfgEAnIgCAUIALATIAJALIAoAKQAFAoAJAmQABAGAFAFQASAQAqgGQAeg0AyANQAFAFACAGQADAIAAAKQgaANgUAWQgEAFgKAAQAAAKgDAJQgCAGgFAFIhQAyQgKAZgEAaQgBAEAFAFQgYAjgaAiIgKALQAAAUAEATQABAGAFAFQgQAigNArQgBADgKAAQg+ANg6ARQgTAogzAKQgDgRgMgKQgFgDAAgKQgegZhFAPQAGApgjAEIgBAFQgYAKgWAAQgXAAgVgKg");
	this.shape_2.setTransform(52.5,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiaHlQgYgWgJglQgCgGgFgFIAFgpQAAgEgFgFQgLgYgRgSQgCgDAAgFQg6gqhwAMQgUgQAAgiIAAgUQgYgfgVggQgFgHAAgKQAPgeARgdQADgGAFgFQAqgEAwgQQg5iPiFh0QAigcAYAVQACACAAAFQAdgRASgZQADgDAAgFQgDg+gUgvQgCgGgFgFQAOgPgOgPIgKgKQAIggAqACQAPgjAtgFQArAIAjA/QACAEAAAFQhcCAAHCOQAAAFgFAFQAVAcAUAfIAJALQBMAGBeAEQAzgnAbg+QACgEAAgFQAagOAhgGQAEgaAQgOIAKgKQAtAAAFgoQBmgxBiAdQAOAjANAkQADAJAAAKQgOAfgEAnIgCAUIALATIAJALIAoAKQAFAoAJAmQABAGAFAFQASAQAqgGQAeg0AyANQAFAFACAGQADAIAAAKQgaANgUAWQgEAFgKAAQAAAKgDAJQgCAGgFAFIhQAyQgKAZgEAaQgBAEAFAFQgYAjgaAiIgKALQAAAUAEATQABAGAFAFQgQAigNArQgBADgKAAQg+ANg6ARQgTAogzAKQgDgRgMgKQgFgDAAgKQgegZhFAPQAGApgjAEIgBAFQgYAKgWAAQgXAAgVgKg");
	this.shape_3.setTransform(52.5,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,99);


(lib.Amazonas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CC00").s().p("AJMIRIgQgIQgCgBAAgFQgNgLgagFQgQgEgPgKQAEhCA3g/QAqgxAdg+QAAgKgEgIQgGgMgEgTQgBgGgFgFQgFAAgCgCIgGgFQgHgIgKgFQgxgQgsgRQgRgHgUAAIgJgLQgMgSgdgBQg0gnhOATQgMAWgmACQgUABgUAFQg0gqhiACQgTALgOAQQgRARgdAGQAAAFgCABIgQAIQgMAGgKAKQi0AkhGg4QgQACgBgVIgDgzIAAgKQgFAAgDgCIgEgHIgGgMQgCgEAAgFQgQACgIgIQgPgOgLgTQgKAFgIgCQgSgHgYgGQgDgggNgUQgTgcgPgeQgugYg0gVQgMgFgKgKQgvgRgjgfQgNgLgPgLIAAgKIAAgKQAAgPAEgOQABgGAFgFQFDAOE9gOQAWgIALgUQARgbAUgZQAggDAUgHQAYgIANgMQAKgPANgKQAYgSANgbQAKAAAIgEIADgBQATgFAUAAQA0gXApAdQAHAEAKAAQgGAWAJAHQAUAOAOATQADADAAAFQBZALBHAdQAAAFADADIAEAFQAIAHAGAJIAJALQgOAcAJAkQALAtAiALQBWATBUAVQAUAFASAJQAMAGAKAKQgfDpgsDZQgZCBgoBuIAAAKQAAAFgBABQgTAEgUAAQAAgFgCgBg");
	this.shape.setTransform(77,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ACgoMQA1gXAoAdQAHAEAKAAQgGAWAJAHQAUAOAPATQACADAAAFQBZALBHAdQAAAFADADQACACADADQAHAHAGAJQAEAGAFAFQgOAcAKAkQALAtAhALQBWATBUAVQAUAFASAJQAMAGAKAKQgfDpgrDZQgaCBgoBuQAAAFAAAFQAAAFgBABQgTAEgUAAQAAgFgCgBQgIgEgIgEQgCgBAAgFQgNgLgZgFQgRgEgPgKQAEhCA3g/QArgxAcg+QAAgKgEgIQgFgMgFgTQgBgGgFgFQgFAAgCgCQgDgDgCgCQgIgIgKgFQgwgQgsgRQgSgHgUAAQgFgFgEgGQgMgSgdgBQg0gnhOATQgMAWgmACQgUABgUAFQg0gqhiACQgTALgOAQQgRARgdAGQAAAFgCABQgIAEgIAEQgMAGgKAKQi0AkhGg4QgQACgBgVQgBgXgCgcQAAgFAAgFQgFAAgDgCQgCgDgCgEQgDgGgDgGQgCgEAAgFQgQACgIgIQgPgOgLgTQgKAFgIgCQgTgHgXgGQgDgggOgUQgSgcgPgeQgugYg0gVQgMgFgKgKQgwgRgjgfQgMgLgPgLQAAgFAAgFQAAgFAAgFQAAgPADgOQACgGAFgFQFCAOE+gOQAWgIALgUQARgbAUgZQAggDAUgHQAYgIANgMQAKgPANgKQAYgSANgbQAKAAAIgEQACgBABAAQATgFAUAAg");
	this.shape_1.setTransform(77,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AJMIRIgQgIQgCgBAAgFQgNgLgagFQgQgEgPgKQAEhCA3g/QAqgxAdg+QAAgKgEgIQgGgMgEgTQgBgGgFgFQgFAAgCgCIgGgFQgHgIgKgFQgxgQgsgRQgRgHgUAAIgJgLQgMgSgdgBQg0gnhOATQgMAWgmACQgUABgUAFQg0gqhiACQgTALgOAQQgRARgdAGQAAAFgCABIgQAIQgMAGgKAKQi0AkhGg4QgQACgBgVIgDgzIAAgKQgFAAgDgCIgEgHIgGgMQgCgEAAgFQgQACgIgIQgPgOgLgTQgKAFgIgCQgSgHgYgGQgDgggNgUQgTgcgPgeQgugYg0gVQgMgFgKgKQgvgRgjgfQgNgLgPgLIAAgKIAAgKQAAgPAEgOQABgGAFgFQFDAOE9gOQAWgIALgUQARgbAUgZQAggDAUgHQAYgIANgMQAKgPANgKQAYgSANgbQAKAAAIgEIADgBQATgFAUAAQA0gXApAdQAHAEAKAAQgGAWAJAHQAUAOAOATQADADAAAFQBZALBHAdQAAAFADADIAEAFQAIAHAGAJIAJALQgOAcAJAkQALAtAiALQBWATBUAVQAUAFASAJQAMAGAKAKQgfDpgsDZQgZCBgoBuIAAAKQAAAFgBABQgTAEgUAAQAAgFgCgBg");
	this.shape_2.setTransform(77,53.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AJMIRIgQgIQgCgBAAgFQgNgLgagFQgQgEgPgKQAEhCA3g/QAqgxAdg+QAAgKgEgIQgGgMgEgTQgBgGgFgFQgFAAgCgCIgGgFQgHgIgKgFQgxgQgsgRQgRgHgUAAIgJgLQgMgSgdgBQg0gnhOATQgMAWgmACQgUABgUAFQg0gqhiACQgTALgOAQQgRARgdAGQAAAFgCABIgQAIQgMAGgKAKQi0AkhGg4QgQACgBgVIgDgzIAAgKQgFAAgDgCIgEgHIgGgMQgCgEAAgFQgQACgIgIQgPgOgLgTQgKAFgIgCQgSgHgYgGQgDgggNgUQgTgcgPgeQgugYg0gVQgMgFgKgKQgvgRgjgfQgNgLgPgLIAAgKIAAgKQAAgPAEgOQABgGAFgFQFDAOE9gOQAWgIALgUQARgbAUgZQAggDAUgHQAYgIANgMQAKgPANgKQAYgSANgbQAKAAAIgEIADgBQATgFAUAAQA0gXApAdQAHAEAKAAQgGAWAJAHQAUAOAOATQADADAAAFQBZALBHAdQAAAFADADIAEAFQAIAHAGAJIAJALQgOAcAJAkQALAtAiALQBWATBUAVQAUAFASAJQAMAGAKAKQgfDpgsDZQgZCBgoBuIAAAKQAAAFgBABQgTAEgUAAQAAgFgCgBg");
	this.shape_3.setTransform(77,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,107.1);


(lib.Inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.InicioClip1();
	this.instance.parent = this;
	this.instance.setTransform(295.9,126.1,1,1,0,0,0,295.9,126.1);

	this.instance_1 = new lib.InicioClip2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.9,126.1,1,1,0,0,0,295.9,126.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlzEaQhph5AAimQAAi7CJh9QCHh9DHAHQDWgHCGB8QCGB9AAC7QAACfhkB6QiFChjxAAQjyAAiEiagAi4kVQg1BgAAC1QAADXBRBnQA4BHBlAAQBEAAAtgfQA7gnAghXQAhhXAAiNQAAilghhTQgihTgzgiQgzgihDAAQh6AAhAB2g");
	this.shape.setTransform(473.4,122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjqGkIAAgXIAeAAQAnAAAYgNQARgIAKgVQAHgPAAhAIAAooQAAhAgHgQQgIgQgWgMQgWgNgmAAIgeAAIAAgWIHVAAIAAAWIgeAAQgnAAgYAOQgRAIgKAVQgHAPAAA/IAAIoQAABBAIAQQAHAQAWANQAWALAmAAIAeAAIAAAXg");
	this.shape_1.setTransform(393.8,122.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjAGCQhvg2g9hlQg9hlAAhyQAAh4BEhsQBDhrByg8QByg7CAgBQBeAABqAnQA9AXAQAAQAVAAAQgPQAPgPAFggIAaAAIAAEkIgaAAQgdhyhQg9QhPg9hlAAQhUAAhFAtQhGAughBJQgpBdAAB0QAABvAeBdQAfBdBBAvQA/AwBogBQBUAABHgjQBGgiBPhVIAABIQhMBLhRAhQhSAghuABQiOgBhwg1g");
	this.shape_2.setTransform(317.6,122.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjqGkIAAgXIAeAAQAnAAAYgNQARgIAKgVQAHgPAAhAIAAooQAAhAgHgQQgIgQgWgMQgWgNgmAAIgeAAIAAgWIHVAAIAAAWIgeAAQgnAAgYAOQgRAIgKAVQgHAPAAA/IAAIoQAABBAIAQQAHAQAWANQAWALAmAAIAeAAIAAAXg");
	this.shape_3.setTransform(243.1,122.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFEGuIpeq7IAAIVQAABJAjAZQAkAaAtAAIAVAAIAAAXIk+AAIAAgXQBKgBAdgcQAdgcAAhDIAApQIgTgWQgcgigWgKQgWgLgpgBIAAgXIE+AAIG6IIIAAloQAAhMgXgaQgggkhKABIAAgXIEoAAIAAAXQg5AHgTALQgUALgKAYQgMAYAAA8IAAK7g");
	this.shape_4.setTransform(167.3,123.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjqGkIAAgXIAeAAQAnAAAYgNQARgIAKgVQAHgPAAhAIAAooQAAhAgHgQQgIgQgWgMQgWgNgmAAIgeAAIAAgWIHVAAIAAAWIgeAAQgnAAgYAOQgRAIgKAVQgHAPAAA/IAAIoQAABBAIAQQAHAQAWANQAWALAmAAIAeAAIAAAXg");
	this.shape_5.setTransform(92.4,122.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("A3PmWMAufAAAIAAMtMgufAAAg");
	this.shape_6.setTransform(298.3,121,1.768,2.077);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("A3OGXIAAstMAudAAAIAAMtg");
	this.shape_7.setTransform(298.3,121,1.768,2.077);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EgjlgMtMBHLAAAIAAZbMhHLAAAg");
	this.shape_8.setTransform(299.4,123.1,1.597,1.677);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("EgjlAMuIAA5bMBHLAAAIAAZbg");
	this.shape_9.setTransform(299.4,123.1,1.597,1.677);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Eg01gVZMBprAAAMAAAAqzMhprAAAg");
	this.shape_10.setTransform(296.1,126.2,1.236,1.218);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996600").s().p("Eg01AVaMAAAgqzMBprAAAMAAAAqzg");
	this.shape_11.setTransform(296.1,126.2,1.236,1.218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,593,253.3);


// stage content:
(lib.Colombia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		
		this.Inicio.addEventListener("click", irAInicio.bind(this));
		
		function irAInicio()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_47 = function() {
		this.stop();
		
		this.PlayB.addEventListener("click", playAgain.bind(this));
		
		function playAgain()
		{
			this.gotoAndPlay(2);
		}
		
		this.Amazonas.addEventListener("click", selAmazonas.bind(this));
		
		function selAmazonas()
		{
			this.gotoAndStop(48);
		}
		
		this.Antioquia.addEventListener("click", selAntioquia.bind(this));
		
		function selAntioquia()
		{
			this.gotoAndStop(49);
		}
		
		this.Arauca.addEventListener("click", selArauca.bind(this));
		
		function selArauca()
		{
			this.gotoAndStop(50);
		}
		
		this.Atlantico.addEventListener("click", selAtlantico.bind(this));
		
		function selAtlantico()
		{
			this.gotoAndStop(51);
		}
		
		this.Bolivar.addEventListener("click", selBolivar.bind(this));
		
		function selBolivar()
		{
			this.gotoAndStop(52);
		}
		
		this.Boyaca.addEventListener("click", selBoyaca.bind(this));
		
		function selBoyaca()
		{
			this.gotoAndStop(53);
		}
		
		this.Caldas.addEventListener("click", selCaldas.bind(this));
		
		function selCaldas()
		{
			this.gotoAndStop(54);
		}
		
		this.Caqueta.addEventListener("click", selCaqueta.bind(this));
		
		function selCaqueta()
		{
			this.gotoAndStop(55);
		}
		
		this.Casanare.addEventListener("click", selCasanare.bind(this));
		
		function selCasanare()
		{
			this.gotoAndStop(56);
		}
		
		this.Cauca.addEventListener("click", selCauca.bind(this));
		
		function selCauca()
		{
			this.gotoAndStop(57);
		}
		
		this.Cesar.addEventListener("click", selCesar.bind(this));
		
		function selCesar()
		{
			this.gotoAndStop(58);
		}
		
		this.Choco.addEventListener("click", selChoco.bind(this));
		
		function selChoco()
		{
			this.gotoAndStop(59);
		}
		
		this.Cordoba.addEventListener("click", selCordoba.bind(this));
		
		function selCordoba()
		{
			this.gotoAndStop(60);
		}
		
		this.Cundinamarca.addEventListener("click", selCundinamarca.bind(this));
		
		function selCundinamarca()
		{
			this.gotoAndStop(61);
		}
		
		this.Guainia.addEventListener("click", selGuainia.bind(this));
		
		function selGuainia()
		{
			this.gotoAndStop(62);
		}
		
		this.Guajira.addEventListener("click", selGuajira.bind(this));
		
		function selGuajira()
		{
			this.gotoAndStop(63);
		}
		
		this.Guaviare.addEventListener("click", selGuaviare.bind(this));
		
		function selGuaviare()
		{
			this.gotoAndStop(64);
		}
		
		this.Huila.addEventListener("click", selHuila.bind(this));
		
		function selHuila()
		{
			this.gotoAndStop(65);
		}
		
		this.Magdalena.addEventListener("click", selMagdalena.bind(this));
		
		function selMagdalena()
		{
			this.gotoAndStop(66);
		}
		
		this.Meta.addEventListener("click", selMeta.bind(this));
		
		function selMeta()
		{
			this.gotoAndStop(67);
		}
		
		this.Narino.addEventListener("click", selNarino.bind(this));
		
		function selNarino()
		{
			this.gotoAndStop(68);
		}
		
		this.NorteDeSantander.addEventListener("click", selNorteDeSantander.bind(this));
		
		function selNorteDeSantander()
		{
			this.gotoAndStop(69);
		}
		
		this.Putumayo.addEventListener("click", selPutumayo.bind(this));
		
		function selPutumayo()
		{
			this.gotoAndStop(70);
		}
		
		this.Quindio.addEventListener("click", selQuindio.bind(this));
		
		function selQuindio()
		{
			this.gotoAndStop(71);
		}
		
		this.Risaralda.addEventListener("click", selRisaralda.bind(this));
		
		function selRisaralda()
		{
			this.gotoAndStop(72);
		}
		
		this.Santander.addEventListener("click", selSantander.bind(this));
		
		function selSantander()
		{
			this.gotoAndStop(73);
		}
		this.Sucre.addEventListener("click", selSucre.bind(this));
		
		function selSucre()
		{
			this.gotoAndStop(74);
		}
		
		this.Tolima.addEventListener("click", selTolima.bind(this));
		
		function selTolima()
		{
			this.gotoAndStop(75);
		}
		
		this.Valle.addEventListener("click", selValle.bind(this));
		
		function selValle()
		{
			this.gotoAndStop(76);
		}
		
		this.Vaupes.addEventListener("click", selVaupes.bind(this));
		
		function selVaupes()
		{
			this.gotoAndStop(77);
		}
		this.Vichada.addEventListener("click", selVichada.bind(this));
		
		function selVichada()
		{
			this.gotoAndStop(78);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(32));

	// Antioquia
	this.Antioquia = new lib.Antioquia();
	this.Antioquia.parent = this;
	this.Antioquia.setTransform(1508.5,428.4,1,1,0,0,0,52.5,49.5);
	this.Antioquia._off = true;
	new cjs.ButtonHelper(this.Antioquia, 0, 1, 2, false, new lib.Antioquia(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Antioquia).wait(1).to({_off:false},0).wait(1).to({rotation:10.7,x:1500.5,y:448.7},0).wait(1).to({rotation:21.3,x:1492.3,y:469},0).wait(1).to({rotation:32,x:1483.7,y:489.1},0).wait(1).to({rotation:42.6,x:1474.8,y:509.1},0).wait(1).to({rotation:53.3,x:1465.4,y:528.8},0).wait(1).to({rotation:63.9,x:1455.5,y:548.3},0).wait(1).to({rotation:74.6,x:1445.1,y:567.5},0).wait(1).to({rotation:85.2,x:1434,y:586.4},0).wait(1).to({rotation:94.2,x:1422.4,y:604.9},0).wait(1).to({rotation:103.2,x:1409.9,y:622.9},0).wait(1).to({rotation:112.2,x:1396.6,y:640.2},0).wait(1).to({rotation:121.2,x:1382.2,y:656.8},0).wait(1).to({rotation:130.2,x:1366.6,y:672.1},0).wait(1).to({rotation:139.2,x:1349.9,y:686.1},0).wait(1).to({rotation:148.2,x:1331.6,y:698.2},0).wait(1).to({rotation:157.2,x:1312,y:707.8},0).wait(1).to({rotation:166.2,x:1291.2,y:714.4},0).wait(1).to({rotation:175.2,x:1269.6,y:717.5},0).wait(1).to({rotation:149.7,x:1247.7,y:716.9},0).wait(1).to({rotation:124.2,x:1226.2,y:712.9},0).wait(1).to({rotation:98.7,x:1205.5,y:706},0).wait(1).to({rotation:73.2,x:1185.7,y:696.7},0).wait(1).to({rotation:47.7,x:1166.8,y:685.7},0).wait(1).to({rotation:22.2,x:1148.9,y:673.1},0).wait(1).to({rotation:-3.3,x:1131.8,y:659.4},0).wait(1).to({rotation:-28.8,x:1115.5,y:644.9},0).wait(1).to({rotation:-54.3,x:1099.9,y:629.6},0).wait(1).to({rotation:-79.8,x:1084.9,y:613.7},0).wait(1).to({rotation:-69.6,x:1070.4,y:597.3},0).wait(1).to({rotation:-59.5,x:1056.4,y:580.5},0).wait(1).to({rotation:-49.4,x:1042.8,y:563.3},0).wait(1).to({rotation:-39.2,x:1029.6,y:545.9},0).wait(1).to({rotation:-29.1,x:1016.8,y:528.2},0).wait(1).to({rotation:-19,x:1004.2,y:510.2},0).wait(1).to({rotation:-8.9,x:992,y:492.1},0).wait(1).to({rotation:1.3,x:980.1,y:473.8},0).wait(1).to({regX:0,regY:0,rotation:0,x:928.4,y:424},0).wait(1).to({regX:52.5,regY:49.5,scaleX:1.02,scaleY:1.03,x:983.3,y:477.8},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:985.7,y:482.1},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:988.1,y:486.4},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:990.5,y:490.7},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:993,y:495},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:995.4,y:499.3},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:997.7,y:503.5},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1000.2,y:507.9},0).wait(1).to({regX:0,regY:0,x:938.4,y:448},0).wait(32));

	// Arauca
	this.Arauca = new lib.Arauca();
	this.Arauca.parent = this;
	this.Arauca.setTransform(644,642,1,1,0,0,0,46.3,14.7);
	this.Arauca._off = true;
	new cjs.ButtonHelper(this.Arauca, 0, 1, 2, false, new lib.Arauca(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Arauca).wait(1).to({_off:false},0).wait(1).to({rotation:11.8,x:656.1,y:656.5},0).wait(1).to({rotation:23.7,x:668.7,y:670.7},0).wait(1).to({rotation:35.5,x:681.6,y:684.5},0).wait(1).to({rotation:47.4,x:695.2,y:697.9},0).wait(1).to({rotation:59.2,x:709.1,y:710.6},0).wait(1).to({rotation:71.1,x:723.7,y:722.8},0).wait(1).to({rotation:82.9,x:738.8,y:734.2},0).wait(1).to({rotation:94.8,x:754.6,y:744.6},0).wait(1).to({rotation:100.8,x:771.1,y:754},0).wait(1).to({rotation:106.8,x:788.3,y:762},0).wait(1).to({rotation:112.8,x:806.1,y:768.4},0).wait(1).to({rotation:118.8,x:824.5,y:773},0).wait(1).to({rotation:124.8,x:843.3,y:775.5},0).wait(1).to({rotation:130.8,x:862.2,y:775.6},0).wait(1).to({rotation:136.8,x:881,y:773.5},0).wait(1).to({rotation:142.8,x:899.5,y:769},0).wait(1).to({rotation:148.8,x:917.3,y:762.6},0).wait(1).to({rotation:154.8,x:934.3,y:754.3},0).wait(1).to({rotation:126.3,x:950.5,y:744.5},0).wait(1).to({rotation:97.8,x:966,y:733.4},0).wait(1).to({rotation:69.3,x:980.5,y:721.3},0).wait(1).to({rotation:40.8,x:994.4,y:708.3},0).wait(1).to({rotation:12.3,x:1007.5,y:694.6},0).wait(1).to({rotation:-16.2,x:1020,y:680.3},0).wait(1).to({rotation:-44.7,x:1031.9,y:665.5},0).wait(1).to({rotation:-73.2,x:1043.3,y:650.4},0).wait(1).to({rotation:-101.8,x:1054.1,y:634.8},0).wait(1).to({rotation:-130.3,x:1064.6,y:619},0).wait(1).to({rotation:-113.9,x:1074.6,y:603},0).wait(1).to({rotation:-97.5,x:1084.3,y:586.7},0).wait(1).to({rotation:-81.2,x:1093.7,y:570.2},0).wait(1).to({rotation:-64.8,x:1102.8,y:553.5},0).wait(1).to({rotation:-48.5,x:1111.5,y:536.7},0).wait(1).to({rotation:-32.1,x:1120,y:519.8},0).wait(1).to({rotation:-15.8,x:1128.2,y:502.7},0).wait(1).to({rotation:0.6,x:1136.3,y:485.5},0).wait(1).to({regX:45.6,regY:14.5,rotation:0.5,x:1136.2,y:485.6},0).wait(1).to({regX:46.3,regY:14.7,scaleX:1.02,scaleY:1.03,x:1142.8,y:490.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1148.7,y:495.1},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1154.6,y:499.7},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1160.4,y:504.3},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1166.4,y:508.9},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1172.2,y:513.6},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1178.1,y:518.2},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1184,y:522.9},0).wait(1).to({regX:45.8,regY:14.6,scaleY:1.21,x:1183.1,y:522.6},0).wait(32));

	// Atlantico
	this.Atlantico = new lib.Atlantico();
	this.Atlantico.parent = this;
	this.Atlantico.setTransform(957,862.4,1,1,0,0,0,7.4,8.9);
	this.Atlantico._off = true;
	new cjs.ButtonHelper(this.Atlantico, 0, 1, 2, false, new lib.Atlantico(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Atlantico).wait(1).to({_off:false},0).wait(1).to({scaleX:1.2,scaleY:1.16,rotation:-22.3,x:973.6,y:844.7},0).wait(1).to({scaleX:1.41,scaleY:1.32,rotation:-44.6,x:990.1,y:827},0).wait(1).to({scaleX:1.61,scaleY:1.47,rotation:-67,x:1006.5,y:809.2},0).wait(1).to({scaleX:1.81,scaleY:1.63,rotation:-89.3,x:1022.9,y:791.2},0).wait(1).to({scaleX:2.01,scaleY:1.79,rotation:-111.6,x:1039,y:773.2},0).wait(1).to({scaleX:2.22,scaleY:1.94,rotation:-133.9,x:1055.1,y:755.1},0).wait(1).to({scaleX:2.42,scaleY:2.1,rotation:-156.2,x:1071,y:736.9},0).wait(1).to({scaleX:2.62,scaleY:2.26,rotation:-178.6,x:1086.8,y:718.5},0).wait(1).to({scaleX:2.83,scaleY:2.42,rotation:-147.2,x:1102.4,y:699.9},0).wait(1).to({scaleX:3.03,scaleY:2.57,rotation:-115.8,x:1117.9,y:681.1},0).wait(1).to({scaleX:3.23,scaleY:2.73,rotation:-84.5,x:1133.2,y:662.2},0).wait(1).to({scaleX:3.43,scaleY:2.89,rotation:-53.1,x:1148.3,y:643.2},0).wait(1).to({scaleX:3.64,scaleY:3.05,rotation:-21.8,x:1163,y:623.9},0).wait(1).to({scaleX:3.84,scaleY:3.2,rotation:9.6,x:1177.4,y:604.6},0).wait(1).to({scaleX:4.04,scaleY:3.36,rotation:40.9,x:1191.4,y:584.8},0).wait(1).to({scaleX:4.25,scaleY:3.52,rotation:72.3,x:1204.8,y:564.8},0).wait(1).to({scaleX:4.45,scaleY:3.67,rotation:103.6,x:1217.7,y:544.4},0).wait(1).to({scaleX:4.65,scaleY:3.83,rotation:135,x:1229.9,y:523.4},0).wait(1).to({scaleX:4.45,scaleY:3.68,rotation:117.7,x:1241.4,y:502},0).wait(1).to({scaleX:4.25,scaleY:3.52,rotation:100.4,x:1251.7,y:480.1},0).wait(1).to({scaleX:4.05,scaleY:3.37,rotation:83.2,x:1260.3,y:457.5},0).wait(1).to({scaleX:3.85,scaleY:3.22,rotation:65.9,x:1266.6,y:434},0).wait(1).to({scaleX:3.66,scaleY:3.06,rotation:48.6,x:1268.9,y:409.9},0).wait(1).to({scaleX:3.46,scaleY:2.91,rotation:31.3,x:1264.8,y:386},0).wait(1).to({scaleX:3.26,scaleY:2.76,rotation:14.1,x:1251.9,y:365.7},0).wait(1).to({scaleX:3.06,scaleY:2.6,rotation:-3.2,x:1232.2,y:351.8},0).wait(1).to({scaleX:2.86,scaleY:2.45,rotation:-20.5,x:1209.2,y:343.9},0).wait(1).to({scaleX:2.66,scaleY:2.29,rotation:-37.8,x:1185.3,y:340.1},0).wait(1).to({scaleX:2.46,scaleY:2.14,rotation:-33,x:1161,y:339},0).wait(1).to({scaleX:2.26,scaleY:1.99,rotation:-28.2,x:1136.9,y:339.7},0).wait(1).to({scaleX:2.06,scaleY:1.83,rotation:-23.5,x:1112.7,y:341.7},0).wait(1).to({scaleX:1.86,scaleY:1.68,rotation:-18.7,x:1088.7,y:344.8},0).wait(1).to({scaleX:1.66,scaleY:1.53,rotation:-13.9,x:1064.7,y:348.7},0).wait(1).to({scaleX:1.46,scaleY:1.37,rotation:-9.2,x:1040.9,y:353.3},0).wait(1).to({scaleX:1.26,scaleY:1.22,rotation:-4.4,x:1017.2,y:358.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:0.4,x:993.6,y:363.9},0).wait(1).to({regX:7.3,regY:8.7,rotation:0.3,x:993.5,y:364},0).wait(1).to({regX:7.4,regY:8.9,scaleX:1.09,scaleY:1.09,x:996.3,y:365.6},0).wait(1).to({scaleX:1.11,scaleY:1.12,x:999.1,y:367.1},0).wait(1).to({scaleX:1.14,scaleY:1.15,x:1001.7,y:368.5},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1004.5,y:370},0).wait(1).to({scaleX:1.18,scaleY:1.2,x:1007.1,y:371.4},0).wait(1).to({scaleX:1.21,scaleY:1.23,x:1009.9,y:372.9},0).wait(1).to({scaleX:1.23,scaleY:1.26,x:1012.6,y:374.3},0).wait(1).to({scaleX:1.25,scaleY:1.29,x:1015.3,y:375.8},0).wait(1).to({regY:8.8,y:375.5},0).wait(32));

	// Bolivar
	this.Bolivar = new lib.Bolivar();
	this.Bolivar.parent = this;
	this.Bolivar.setTransform(1292.3,738.3,1,1,0,0,0,29.8,54);
	this.Bolivar._off = true;
	new cjs.ButtonHelper(this.Bolivar, 0, 1, 2, false, new lib.Bolivar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Bolivar).wait(1).to({_off:false},0).wait(1).to({rotation:17.8,x:1250.7,y:721.1},0).wait(1).to({rotation:35.7,x:1209.2,y:703.8},0).wait(1).to({rotation:53.5,x:1167.6,y:686.4},0).wait(1).to({rotation:71.4,x:1126.1,y:669.1},0).wait(1).to({rotation:89.2,x:1084.6,y:651.6},0).wait(1).to({rotation:107.1,x:1043.1,y:634},0).wait(1).to({rotation:124.9,x:1001.6,y:616.4},0).wait(1).to({rotation:142.8,x:960.2,y:598.6},0).wait(1).to({rotation:117.3,x:918.9,y:580.8},0).wait(1).to({rotation:91.8,x:877.6,y:562.8},0).wait(1).to({rotation:66.3,x:836.4,y:544.8},0).wait(1).to({rotation:40.8,x:795.2,y:526.5},0).wait(1).to({rotation:15.3,x:754.1,y:508.1},0).wait(1).to({rotation:-10.2,x:713.1,y:489.6},0).wait(1).to({rotation:-35.7,x:672.2,y:470.7},0).wait(1).to({rotation:-61.1,x:631.4,y:451.6},0).wait(1).to({rotation:-86.6,x:590.7,y:432.1},0).wait(1).to({rotation:-112.1,x:550.3,y:412.2},0).wait(1).to({rotation:-97.5,x:510.3,y:391.6},0).wait(1).to({rotation:-82.9,x:470.9,y:369.9},0).wait(1).to({rotation:-68.3,x:432.5,y:346.2},0).wait(1).to({rotation:-53.7,x:399.8,y:316},0).wait(1).to({rotation:-39.1,x:435.4,y:300.8},0).wait(1).to({rotation:-24.5,x:480.2,y:304.4},0).wait(1).to({rotation:-9.9,x:524.8,y:310.9},0).wait(1).to({rotation:4.7,x:569.2,y:318.7},0).wait(1).to({rotation:19.4,x:613.3,y:327.5},0).wait(1).to({rotation:34,x:657.4,y:336.7},0).wait(1).to({rotation:29.7,x:701.4,y:346.3},0).wait(1).to({rotation:25.4,x:745.2,y:356.3},0).wait(1).to({rotation:21.1,x:789.2,y:366.6},0).wait(1).to({rotation:16.8,x:833,y:377.1},0).wait(1).to({rotation:12.5,x:876.7,y:387.7},0).wait(1).to({rotation:8.2,x:920.4,y:398.6},0).wait(1).to({rotation:3.9,x:964.1,y:409.5},0).wait(1).to({rotation:-0.4,x:1007.8,y:420.6},0).wait(1).to({regX:29.6,regY:54.1,rotation:-0.3,y:420.7},0).wait(1).to({regX:29.8,regY:54,scaleX:1.02,scaleY:1.03,x:1011,y:423.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1014,y:426.5},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1017,y:429.4},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1020,y:432.3},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1023,y:435.2},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1026,y:438.1},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1029.1,y:441},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1032.1,y:443.9},0).wait(1).to({regY:54.1,x:1032,y:444},0).wait(32));

	// Boyaca
	this.Boyaca = new lib.Boyacá();
	this.Boyaca.parent = this;
	this.Boyaca.setTransform(754.2,755.6,1,1,0,0,0,43,36.8);
	this.Boyaca._off = true;
	new cjs.ButtonHelper(this.Boyaca, 0, 1, 2, false, new lib.Boyacá(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Boyaca).wait(1).to({_off:false},0).wait(1).to({rotation:14.5,x:782.6,y:766.1},0).wait(1).to({rotation:29,x:810.9,y:776.5},0).wait(1).to({rotation:43.5,x:839.4,y:786.8},0).wait(1).to({rotation:58,x:868,y:796.8},0).wait(1).to({rotation:72.5,x:896.5,y:806.7},0).wait(1).to({rotation:87,x:925.2,y:816.5},0).wait(1).to({rotation:101.5,x:954,y:826},0).wait(1).to({rotation:116,x:982.8,y:835.2},0).wait(1).to({rotation:91.6,x:1011.7,y:844.2},0).wait(1).to({rotation:67.1,x:1040.7,y:852.9},0).wait(1).to({rotation:42.6,x:1069.9,y:861.2},0).wait(1).to({rotation:18.1,x:1099.1,y:869},0).wait(1).to({rotation:-6.3,x:1128.5,y:876.3},0).wait(1).to({rotation:-30.8,x:1158.1,y:883},0).wait(1).to({rotation:-55.3,x:1187.8,y:888.7},0).wait(1).to({rotation:-79.8,x:1217.7,y:893.4},0).wait(1).to({rotation:-104.2,x:1247.9,y:896.3},0).wait(1).to({rotation:-128.7,x:1278.1,y:896.9},0).wait(1).to({rotation:-110.7,x:1308.1,y:892.9},0).wait(1).to({rotation:-92.7,x:1334.6,y:879.1},0).wait(1).to({rotation:-74.7,x:1344.7,y:851.5},0).wait(1).to({rotation:-56.7,x:1338,y:822.1},0).wait(1).to({rotation:-38.7,x:1324.6,y:795},0).wait(1).to({rotation:-20.7,x:1308.2,y:769.6},0).wait(1).to({rotation:-2.6,x:1290.1,y:745.2},0).wait(1).to({rotation:15.4,x:1270.9,y:721.9},0).wait(1).to({rotation:33.4,x:1251,y:699},0).wait(1).to({rotation:51.4,x:1230.5,y:676.7},0).wait(1).to({rotation:45,x:1209.5,y:654.9},0).wait(1).to({rotation:38.6,x:1188.2,y:633.4},0).wait(1).to({rotation:32.2,x:1166.6,y:612.2},0).wait(1).to({rotation:25.8,x:1144.7,y:591.3},0).wait(1).to({rotation:19.4,x:1122.6,y:570.6},0).wait(1).to({rotation:13,x:1100.3,y:550.1},0).wait(1).to({rotation:6.6,x:1077.9,y:529.9},0).wait(1).to({rotation:0.2,x:1055.3,y:509.7},0).wait(1).to({regX:42.7,regY:36.6,rotation:0,x:1055.2},0).wait(1).to({regX:43,regY:36.8,scaleX:1.02,scaleY:1.03,x:1059.5,y:515.2},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1063.6,y:520.5},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1067.7,y:525.7},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1071.8,y:530.9},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1075.9,y:536.2},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1080,y:541.5},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1084.1,y:546.7},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1088.1,y:551.9},0).wait(1).to({y:551.7},0).wait(32));

	// Caldas
	this.Caldas = new lib.Caldas();
	this.Caldas.parent = this;
	this.Caldas.setTransform(1564.1,559.9,1,1,0,0,0,18.9,12);
	this.Caldas._off = true;
	new cjs.ButtonHelper(this.Caldas, 0, 1, 2, false, new lib.Caldas(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Caldas).wait(1).to({_off:false},0).wait(1).to({regX:19,scaleX:1.17,scaleY:1.19,rotation:-15,x:1537.9,y:545.4},0).wait(1).to({scaleX:1.33,scaleY:1.38,rotation:-30,x:1511.8,y:530.5},0).wait(1).to({scaleX:1.5,scaleY:1.56,rotation:-45,x:1485.8,y:515.3},0).wait(1).to({scaleX:1.67,scaleY:1.75,rotation:-60,x:1459.8,y:500.1},0).wait(1).to({scaleX:1.83,scaleY:1.94,rotation:-75,x:1433.7,y:485},0).wait(1).to({scaleX:2,scaleY:2.12,rotation:-90,x:1407.6,y:470.1},0).wait(1).to({scaleX:2.16,scaleY:2.31,rotation:-105,x:1381.3,y:455.3},0).wait(1).to({scaleX:2.33,scaleY:2.5,rotation:-120,x:1354.9,y:440.8},0).wait(1).to({scaleX:2.5,scaleY:2.69,rotation:-91.5,x:1328.4,y:426.6},0).wait(1).to({scaleX:2.66,scaleY:2.87,rotation:-63,x:1301.7,y:412.7},0).wait(1).to({scaleX:2.83,scaleY:3.06,rotation:-34.5,x:1274.8,y:399.3},0).wait(1).to({scaleX:3,scaleY:3.25,rotation:-6,x:1247.7,y:386.4},0).wait(1).to({scaleX:3.16,scaleY:3.44,rotation:22.5,x:1220.4,y:374},0).wait(1).to({scaleX:3.33,scaleY:3.62,rotation:51,x:1192.6,y:362.2},0).wait(1).to({scaleX:3.49,scaleY:3.81,rotation:79.5,x:1164.6,y:351.1},0).wait(1).to({scaleX:3.66,scaleY:4,rotation:108,x:1136.2,y:340.7},0).wait(1).to({scaleX:3.83,scaleY:4.18,rotation:136.5,x:1107.5,y:331.3},0).wait(1).to({scaleX:3.99,scaleY:4.37,rotation:165,x:1078.6,y:323},0).wait(1).to({scaleX:3.83,scaleY:4.18,rotation:132,x:1049.3,y:316.1},0).wait(1).to({scaleX:3.66,scaleY:4,rotation:99,x:1019.8,y:311},0).wait(1).to({scaleX:3.49,scaleY:3.81,rotation:66,x:989.9,y:307.9},0).wait(1).to({scaleX:3.33,scaleY:3.62,rotation:33,x:960,y:307.2},0).wait(1).to({scaleX:3.16,scaleY:3.44,rotation:0,x:930,y:309.7},0).wait(1).to({scaleX:2.99,scaleY:3.25,rotation:-33,x:900.4,y:316.2},0).wait(1).to({scaleX:2.82,scaleY:3.06,rotation:-66,x:871.9,y:325.9},0).wait(1).to({scaleX:2.66,scaleY:2.87,rotation:-99,x:844.7,y:339.3},0).wait(1).to({scaleX:2.49,scaleY:2.69,rotation:-132,x:822,y:358.6},0).wait(1).to({scaleX:2.32,scaleY:2.5,rotation:-165,x:811.4,y:385.8},0).wait(1).to({scaleX:2.16,scaleY:2.31,rotation:-144.4,x:819.1,y:414.5},0).wait(1).to({scaleX:1.99,scaleY:2.13,rotation:-123.8,x:837,y:438.7},0).wait(1).to({scaleX:1.82,scaleY:1.94,rotation:-103.1,x:859.2,y:459},0).wait(1).to({scaleX:1.66,scaleY:1.75,rotation:-82.5,x:883.6,y:476.8},0).wait(1).to({scaleX:1.49,scaleY:1.57,rotation:-61.9,x:909.3,y:492.5},0).wait(1).to({scaleX:1.32,scaleY:1.38,rotation:-41.3,x:936,y:506.5},0).wait(1).to({scaleX:1.16,scaleY:1.19,rotation:-20.6,x:963.4,y:518.8},0).wait(1).to({scaleX:0.99,scaleY:1,rotation:0,x:991.5,y:529.6},0).wait(1).to({y:529.7},0).wait(1).to({scaleX:1.01,scaleY:1.03,x:994.1,y:535.4},0).wait(1).to({scaleX:1.03,scaleY:1.06,x:996.8,y:541.2},0).wait(1).to({scaleX:1.06,scaleY:1.08,x:999.4,y:547},0).wait(1).to({scaleX:1.08,scaleY:1.11,x:1002.1,y:552.7},0).wait(1).to({scaleX:1.1,scaleY:1.14,x:1004.8,y:558.5},0).wait(1).to({scaleX:1.12,scaleY:1.16,x:1007.4,y:564.3},0).wait(1).to({scaleX:1.14,scaleY:1.19,x:1010.1,y:570.1},0).wait(1).to({scaleX:1.17,scaleY:1.21,x:1012.7,y:575.8},0).wait(1).to({regY:12.1,y:576},0).wait(32));

	// Caqueta
	this.Caqueta = new lib.Caquetá();
	this.Caqueta.parent = this;
	this.Caqueta.setTransform(433,518.9,1,1,0,0,0,79,52.5);
	this.Caqueta._off = true;
	new cjs.ButtonHelper(this.Caqueta, 0, 1, 2, false, new lib.Caquetá(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Caqueta).wait(1).to({_off:false},0).wait(1).to({rotation:13.1,x:488.6,y:507.7},0).wait(1).to({rotation:26.3,x:544.1,y:496},0).wait(1).to({rotation:39.4,x:599.6,y:483.9},0).wait(1).to({rotation:52.5,x:655.1,y:471.5},0).wait(1).to({rotation:65.6,x:710.5,y:458.9},0).wait(1).to({rotation:78.8,x:765.8,y:446.4},0).wait(1).to({rotation:91.9,x:821.2,y:433.6},0).wait(1).to({rotation:105,x:876.6,y:420.9},0).wait(1).to({rotation:79.5,x:932,y:408.3},0).wait(1).to({rotation:54,x:987.5,y:395.6},0).wait(1).to({rotation:28.5,x:1042.9,y:383.2},0).wait(1).to({rotation:3,x:1098.4,y:371},0).wait(1).to({rotation:-22.5,x:1154,y:358.9},0).wait(1).to({rotation:-48,x:1209.5,y:347.2},0).wait(1).to({rotation:-73.5,x:1265.3,y:335.8},0).wait(1).to({rotation:-99,x:1321.2,y:325},0).wait(1).to({rotation:-124.5,x:1377.1,y:314.9},0).wait(1).to({rotation:-150,x:1433.3,y:305.7},0).wait(1).to({rotation:-126.6,x:1489.6,y:297.8},0).wait(1).to({rotation:-103.2,x:1546.3,y:291.8},0).wait(1).to({rotation:-79.8,x:1603.4,y:289.4},0).wait(1).to({rotation:-56.4,x:1660,y:295.5},0).wait(1).to({rotation:-33,x:1686.4,y:335},0).wait(1).to({rotation:-9.6,x:1657.2,y:383.3},0).wait(1).to({rotation:13.8,x:1616.2,y:422.5},0).wait(1).to({rotation:37.2,x:1570.2,y:455.8},0).wait(1).to({rotation:60.6,x:1521.6,y:485.3},0).wait(1).to({rotation:84,x:1471.5,y:511.9},0).wait(1).to({rotation:73.5,x:1420.1,y:536.2},0).wait(1).to({rotation:63,x:1367.9,y:558.7},0).wait(1).to({rotation:52.5,x:1315.1,y:579.6},0).wait(1).to({rotation:42.1,x:1261.7,y:598.9},0).wait(1).to({rotation:31.6,x:1207.7,y:616.7},0).wait(1).to({rotation:21.1,x:1153.4,y:633.1},0).wait(1).to({rotation:10.6,x:1098.4,y:647.7},0).wait(1).to({rotation:0.1,x:1043,y:660.1},0).wait(1).to({regX:78.7,regY:52.2,rotation:0,y:660},0).wait(1).to({regX:79,regY:52.5,scaleX:1.02,scaleY:1.03,x:1047.1,y:669.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1050.9,y:678.7},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1054.7,y:688},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1058.5,y:697.1},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1062.3,y:706.4},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1066.2,y:715.5},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1070,y:724.8},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1073.8,y:734},0).wait(1).to({regY:52.4,x:1073.7,y:733.7},0).wait(32));

	// Casanare
	this.Casanare = new lib.Casanare();
	this.Casanare.parent = this;
	this.Casanare.setTransform(1314.5,382.2,1,1,0,0,0,52,31);
	this.Casanare._off = true;
	new cjs.ButtonHelper(this.Casanare, 0, 1, 2, false, new lib.Casanare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Casanare).wait(1).to({_off:false},0).wait(1).to({rotation:9.4,x:1320.7,y:404.8},0).wait(1).to({rotation:18.8,x:1328.1,y:427.1},0).wait(1).to({rotation:28.1,x:1335.7,y:449.4},0).wait(1).to({rotation:37.5,x:1342.7,y:471.9},0).wait(1).to({rotation:46.9,x:1348.6,y:494.7},0).wait(1).to({rotation:56.3,x:1352.8,y:517.8},0).wait(1).to({rotation:65.6,x:1354.4,y:541.3},0).wait(1).to({rotation:75,x:1352.8,y:564.7},0).wait(1).to({rotation:82.5,x:1347.1,y:587.4},0).wait(1).to({rotation:90,x:1337.3,y:608.6},0).wait(1).to({rotation:97.5,x:1323.8,y:627.7},0).wait(1).to({rotation:105,x:1307.3,y:644.5},0).wait(1).to({rotation:112.5,x:1288.7,y:658.9},0).wait(1).to({rotation:120,x:1268.7,y:671.2},0).wait(1).to({rotation:127.5,x:1247.7,y:681.9},0).wait(1).to({rotation:135,x:1226.1,y:691},0).wait(1).to({rotation:142.5,x:1204,y:699},0).wait(1).to({rotation:150,x:1181.5,y:706},0).wait(1).to({rotation:117,x:1158.3,y:712.3},0).wait(1).to({rotation:84,x:1135.4,y:717.8},0).wait(1).to({rotation:51,x:1112.3,y:722.6},0).wait(1).to({rotation:18.1,x:1089,y:726.3},0).wait(1).to({rotation:-14.9,x:1065.5,y:728.6},0).wait(1).to({rotation:-47.9,x:1041.8},0).wait(1).to({rotation:-80.9,x:1018.4,y:724.4},0).wait(1).to({rotation:-113.9,x:999.4,y:712.4},0).wait(1).to({rotation:-146.9,x:992.3,y:691.3},0).wait(1).to({rotation:-179.9,x:997.1,y:668.2},0).wait(1).to({rotation:-157.4,x:1007.4,y:646.9},0).wait(1).to({rotation:-134.9,x:1020.1,y:627},0).wait(1).to({rotation:-112.4,x:1034.4,y:608.4},0).wait(1).to({rotation:-89.9,x:1049.9,y:590.6},0).wait(1).to({rotation:-67.4,x:1066.2,y:573.5},0).wait(1).to({rotation:-45,x:1083,y:557.1},0).wait(1).to({rotation:-22.5,x:1100.5,y:541.4},0).wait(1).to({rotation:0,x:1118.6,y:526.3},0).wait(1).to({regX:52.1,x:1118.7},0).wait(1).to({regX:52,scaleX:1.02,scaleY:1.03,x:1124.1,y:532},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:1129.5,y:537.6},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1135,y:543.4},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1140.5,y:549},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1146,y:554.7},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1151.4,y:560.4},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1156.9,y:566.1},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1162.3,y:571.8},0).wait(1).to({regX:52.1,regY:31.1,x:1162.5,y:571.9},0).wait(32));

	// Cauca
	this.Cauca = new lib.Cauca();
	this.Cauca.parent = this;
	this.Cauca.setTransform(1054.9,254.9,1,1,0,0,0,35.6,35.1);
	this.Cauca._off = true;
	new cjs.ButtonHelper(this.Cauca, 0, 1, 2, false, new lib.Cauca(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Cauca).wait(1).to({_off:false},0).wait(1).to({regX:35.5,rotation:18.8,x:1079.4,y:267.3},0).wait(1).to({scaleX:1,rotation:37.5,x:1104,y:280},0).wait(1).to({rotation:56.3,x:1128.4,y:292.8},0).wait(1).to({scaleX:1,rotation:75,x:1152.8,y:305.8},0).wait(1).to({rotation:93.8,x:1177,y:319},0).wait(1).to({rotation:112.5,x:1201.1,y:332.5},0).wait(1).to({scaleX:1,rotation:131.3,x:1225,y:346.3},0).wait(1).to({rotation:150,x:1248.7,y:360.4},0).wait(1).to({scaleX:1,rotation:129.5,x:1272.2,y:374.9},0).wait(1).to({rotation:109,x:1295.3,y:389.9},0).wait(1).to({scaleX:1,rotation:88.5,x:1318.1,y:405.5},0).wait(1).to({rotation:68,x:1340.4,y:421.8},0).wait(1).to({rotation:47.5,x:1361.9,y:438.9},0).wait(1).to({scaleX:1.01,rotation:27,x:1382.5,y:457.4},0).wait(1).to({rotation:6.5,x:1401.3,y:477.5},0).wait(1).to({scaleX:1.01,rotation:-14,x:1416.9,y:500.3},0).wait(1).to({rotation:-34.4,x:1425.3,y:526.4},0).wait(1).to({rotation:-54.9,x:1418.7,y:552.7},0).wait(1).to({scaleX:1.01,rotation:-35.8,x:1399.2,y:572},0).wait(1).to({rotation:-16.7,x:1375.1,y:585.2},0).wait(1).to({scaleX:1.01,rotation:2.4,x:1349.1,y:594.7},0).wait(1).to({rotation:21.6,x:1322.5,y:602},0).wait(1).to({rotation:40.7,x:1295.5,y:607.7},0).wait(1).to({scaleX:1.01,rotation:59.8,x:1268.3,y:612.3},0).wait(1).to({rotation:78.9,x:1241.1,y:616.1},0).wait(1).to({scaleX:1.01,rotation:98.1,x:1213.6,y:619.1},0).wait(1).to({rotation:117.2,x:1186.2,y:621.6},0).wait(1).to({rotation:136.3,x:1158.7,y:623.7},0).wait(1).to({scaleX:1.01,rotation:119.5,x:1131.1,y:625.4},0).wait(1).to({rotation:102.6,x:1103.5,y:626.6},0).wait(1).to({scaleX:1.01,rotation:85.7,x:1076,y:627.7},0).wait(1).to({rotation:68.8,x:1048.4,y:628.4},0).wait(1).to({rotation:52,x:1020.7,y:629},0).wait(1).to({scaleX:1.01,rotation:35.1,x:993.1,y:629.3},0).wait(1).to({rotation:18.2,x:965.5,y:629.5},0).wait(1).to({scaleX:1.01,rotation:1.4,x:937.9},0).wait(1).to({regX:35.6,regY:34.6,rotation:1.3,x:938.1,y:629.7},0).wait(1).to({regX:35.5,regY:35.1,scaleX:1.04,scaleY:1.03,x:939.4,y:638.6},0).wait(1).to({scaleX:1.06,scaleY:1.05,x:940.9,y:647},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:942.4,y:655.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:943.9,y:663.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:945.3,y:672.3},0).wait(1).to({scaleX:1.15,scaleY:1.16,x:946.8,y:680.6},0).wait(1).to({scaleX:1.17,scaleY:1.18,x:948.3,y:689.1},0).wait(1).to({scaleX:1.2,scaleY:1.21,x:949.7,y:697.5},0).wait(1).to({regX:35.6,regY:35,x:949.8,y:697.1},0).wait(32));

	// Cesar
	this.Cesar = new lib.Cesar();
	this.Cesar.parent = this;
	this.Cesar.setTransform(631.9,524.7,1,1,0,0,0,17.6,46.8);
	this.Cesar._off = true;
	new cjs.ButtonHelper(this.Cesar, 0, 1, 2, false, new lib.Cesar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Cesar).wait(1).to({_off:false},0).wait(1).to({rotation:13.2,x:640.3,y:542.4},0).wait(1).to({rotation:26.4,x:649,y:560.1},0).wait(1).to({rotation:39.6,x:658.1,y:577.6},0).wait(1).to({rotation:52.8,x:667.6,y:594.9},0).wait(1).to({rotation:66,x:677.5,y:611.9},0).wait(1).to({rotation:79.2,x:688,y:628.6},0).wait(1).to({rotation:92.4,x:699,y:645},0).wait(1).to({rotation:105.5,x:710.7,y:660.8},0).wait(1).to({rotation:91.7,x:723.1,y:676.1},0).wait(1).to({rotation:77.8,x:736.5,y:690.6},0).wait(1).to({rotation:64,x:751.1,y:703.9},0).wait(1).to({rotation:50.1,x:767,y:715.6},0).wait(1).to({rotation:36.3,x:784.3,y:725},0).wait(1).to({rotation:22.4,x:802.9,y:731.2},0).wait(1).to({rotation:8.6,x:822.6,y:733.1},0).wait(1).to({rotation:-5.3,x:842,y:730.4},0).wait(1).to({rotation:-19.1,x:860.5,y:723.4},0).wait(1).to({rotation:-33,x:877.4,y:713.3},0).wait(1).to({rotation:-45.2,x:892.7,y:700.9},0).wait(1).to({rotation:-57.3,x:906.7,y:687},0).wait(1).to({rotation:-69.5,x:919.4,y:672},0).wait(1).to({rotation:-81.7,x:931.3,y:656.2},0).wait(1).to({rotation:-93.9,x:942.3,y:639.8},0).wait(1).to({rotation:-106,x:952.6,y:623},0).wait(1).to({rotation:-118.2,x:962.3,y:605.8},0).wait(1).to({rotation:-130.4,x:971.4,y:588.3},0).wait(1).to({rotation:-142.6,x:980.1,y:570.7},0).wait(1).to({rotation:-154.7,x:988.5,y:552.8},0).wait(1).to({rotation:-135.4,x:996.5,y:534.8},0).wait(1).to({rotation:-116.1,x:1004.1,y:516.6},0).wait(1).to({rotation:-96.8,x:1011.5,y:498.3},0).wait(1).to({rotation:-77.5,x:1018.7,y:480},0).wait(1).to({rotation:-58.2,x:1025.5,y:461.6},0).wait(1).to({rotation:-38.8,x:1032.2,y:443},0).wait(1).to({rotation:-19.5,x:1038.7,y:424.4},0).wait(1).to({rotation:-0.2,x:1044.9,y:405.7},0).wait(1).to({regX:17.4,regY:46.3,rotation:0,x:1045},0).wait(1).to({regX:17.6,regY:46.8,scaleX:1.02,scaleY:1.03,rotation:-0.1,x:1049,y:408.7},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1052.9,y:411.2},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1056.7,y:413.8},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1060.6,y:416.3},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1064.5,y:418.9},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1068.3,y:421.4},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1072.2,y:424},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1076.1,y:426.5},0).wait(1).to({regY:46.6,rotation:0,x:1076,y:426},0).wait(32));

	// Choco
	this.Choco = new lib.Choco();
	this.Choco.parent = this;
	this.Choco.setTransform(1468.3,597.7,1,1,0,0,0,29.2,59);
	this.Choco._off = true;
	new cjs.ButtonHelper(this.Choco, 0, 1, 2, false, new lib.Choco(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Choco).wait(1).to({_off:false},0).wait(1).to({rotation:15,x:1477.9,y:578.7},0).wait(1).to({rotation:30,x:1487,y:559.4},0).wait(1).to({rotation:45,x:1495.6,y:539.9},0).wait(1).to({rotation:60,x:1503.3,y:520},0).wait(1).to({rotation:75,x:1509.8,y:499.6},0).wait(1).to({rotation:90,x:1514.3,y:478.8},0).wait(1).to({rotation:105,x:1515.2,y:457.5},0).wait(1).to({rotation:120,x:1509.6,y:437},0).wait(1).to({rotation:92.9,x:1495.2,y:421.6},0).wait(1).to({rotation:65.9,x:1475.6,y:413.5},0).wait(1).to({rotation:38.9,x:1454.5,y:410.2},0).wait(1).to({rotation:11.9,x:1433.2,y:409.6},0).wait(1).to({rotation:-15.1,x:1411.9,y:410.6},0).wait(1).to({rotation:-42.1,x:1390.6,y:412.7},0).wait(1).to({rotation:-69.1,x:1369.5,y:415.5},0).wait(1).to({rotation:-96.1,x:1348.3,y:418.8},0).wait(1).to({rotation:-123.1,x:1327.3,y:422.6},0).wait(1).to({rotation:-150.2,x:1306.3,y:426.7},0).wait(1).to({rotation:-145.7,x:1285.4,y:431},0).wait(1).to({rotation:-141.2,x:1264.5,y:435.4},0).wait(1).to({rotation:-136.7,x:1243.7,y:439.9},0).wait(1).to({rotation:-132.2,x:1222.9,y:444.6},0).wait(1).to({rotation:-127.7,x:1202,y:449.4},0).wait(1).to({rotation:-123.2,x:1181.2,y:454.2},0).wait(1).to({rotation:-118.7,x:1160.5,y:459.1},0).wait(1).to({rotation:-114.2,x:1139.7,y:463.9},0).wait(1).to({rotation:-109.7,x:1118.9,y:468.8},0).wait(1).to({rotation:-105.2,x:1098.1,y:473.7},0).wait(1).to({rotation:-92.1,x:1077.3,y:478.6},0).wait(1).to({rotation:-78.9,x:1056.6,y:483.5},0).wait(1).to({rotation:-65.8,x:1035.8,y:488.4},0).wait(1).to({rotation:-52.7,x:1015,y:493.3},0).wait(1).to({rotation:-39.6,x:994.2,y:498.1},0).wait(1).to({rotation:-26.4,x:973.4,y:502.9},0).wait(1).to({rotation:-13.3,x:952.6,y:507.7},0).wait(1).to({rotation:-0.2,x:931.8,y:512.4},0).wait(1).to({regX:28.9,regY:58.7,rotation:0,y:512.5},0).wait(1).to({regX:29.2,regY:59,scaleX:1.02,scaleY:1.03,x:933.5,y:518.2},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:934.8,y:523.5},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:936.2,y:528.8},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:937.5,y:534.2},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:938.9,y:539.5},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:940.2,y:544.8},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:941.6,y:550.2},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:942.9,y:555.5},0).wait(1).to({x:942.8,y:555.3},0).wait(32));

	// Cordoba
	this.Cordoba = new lib.Cordoba();
	this.Cordoba.parent = this;
	this.Cordoba.setTransform(1427.2,800.4,1,1,0,0,0,26.6,30.5);
	this.Cordoba._off = true;
	new cjs.ButtonHelper(this.Cordoba, 0, 1, 2, false, new lib.Cordoba(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Cordoba).wait(1).to({_off:false},0).wait(1).to({regX:26.5,rotation:-19.2,x:1405.3,y:801.2},0).wait(1).to({rotation:-38.4,x:1383.6,y:801.9},0).wait(1).to({rotation:-57.6,x:1361.9,y:802.4},0).wait(1).to({rotation:-76.8,x:1340.1,y:802.7},0).wait(1).to({rotation:-96,x:1318.4},0).wait(1).to({rotation:-115.3,x:1296.7,y:802.4},0).wait(1).to({rotation:-134.5,x:1274.9,y:801.9},0).wait(1).to({rotation:-153.7,x:1253.2,y:801},0).wait(1).to({rotation:-128.4,x:1231.5,y:799.8},0).wait(1).to({rotation:-103.1,x:1209.8,y:798.2},0).wait(1).to({rotation:-77.8,x:1188.1,y:796.2},0).wait(1).to({rotation:-52.6,x:1166.5,y:793.6},0).wait(1).to({rotation:-27.3,x:1145,y:790.5},0).wait(1).to({rotation:-2,x:1123.5,y:786.8},0).wait(1).to({rotation:23.3,x:1102.3,y:782.2},0).wait(1).to({rotation:48.6,x:1081.2,y:776.9},0).wait(1).to({rotation:73.8,x:1060.4,y:770.7},0).wait(1).to({rotation:99.1,x:1039.9,y:763.2},0).wait(1).to({rotation:107,x:1020,y:754.6},0).wait(1).to({rotation:114.8,x:1000.8,y:744.3},0).wait(1).to({rotation:122.7,x:982.8,y:732.3},0).wait(1).to({rotation:130.5,x:966.2,y:718.2},0).wait(1).to({rotation:138.4,x:951.6,y:702.1},0).wait(1).to({rotation:146.3,x:939.6,y:683.9},0).wait(1).to({rotation:154.1,x:930.7,y:664.1},0).wait(1).to({rotation:162,x:924.9,y:643.2},0).wait(1).to({rotation:169.8,x:922.2,y:621.7},0).wait(1).to({rotation:177.7,x:922,y:600},0).wait(1).to({rotation:155.4,x:924.2,y:578.2},0).wait(1).to({rotation:133.2,x:928.1,y:556.9},0).wait(1).to({rotation:110.9,x:933.6,y:535.8},0).wait(1).to({rotation:88.6,x:940.3,y:515.1},0).wait(1).to({rotation:66.4,x:947.9,y:494.8},0).wait(1).to({rotation:44.1,x:956.4,y:474.8},0).wait(1).to({rotation:21.9,x:965.8,y:455.1},0).wait(1).to({rotation:-0.4,x:975.6,y:435.8},0).wait(1).to({rotation:-0.3,x:975.7,y:435.9},0).wait(1).to({scaleX:1.02,scaleY:1.03,x:978,y:439.1},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:980.3,y:442.4},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:982.5,y:445.7},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:984.8,y:449.1},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:987.1,y:452.4},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:989.4,y:455.7},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:991.7,y:459},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:994,y:462.3},0).wait(1).to({regY:30.6,y:462.4},0).wait(32));

	// Cundinamarca
	this.Cundinamarca = new lib.Cundinamarca();
	this.Cundinamarca.parent = this;
	this.Cundinamarca.setTransform(1245.2,869.1,1,1,0,0,0,29.2,32.6);
	this.Cundinamarca._off = true;
	new cjs.ButtonHelper(this.Cundinamarca, 0, 1, 2, false, new lib.Cundinamarca(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Cundinamarca).wait(1).to({_off:false},0).wait(1).to({regX:29.1,rotation:16.9,x:1212.8,y:867.9},0).wait(1).to({rotation:33.8,x:1180.5,y:866.6},0).wait(1).to({rotation:50.6,x:1148.1,y:865.3},0).wait(1).to({rotation:67.5,x:1115.8,y:863.8},0).wait(1).to({rotation:84.4,x:1083.4,y:862},0).wait(1).to({rotation:101.3,x:1051.1,y:860.1},0).wait(1).to({rotation:118.1,x:1018.9,y:858},0).wait(1).to({rotation:135,x:986.5,y:855.7},0).wait(1).to({rotation:111.6,x:954.3,y:853.1},0).wait(1).to({rotation:88.2,x:922,y:850.3},0).wait(1).to({rotation:64.8,x:889.8,y:847.1},0).wait(1).to({rotation:41.4,x:857.6,y:843.5},0).wait(1).to({rotation:18,x:825.4,y:839.4},0).wait(1).to({rotation:-5.4,x:793.3,y:834.8},0).wait(1).to({rotation:-28.8,x:761.4,y:829.6},0).wait(1).to({rotation:-52.2,x:729.7,y:823.3},0).wait(1).to({rotation:-75.6,x:698.2,y:815.8},0).wait(1).to({rotation:-99,x:667.2,y:806.5},0).wait(1).to({rotation:-76.4,x:637.3,y:794.2},0).wait(1).to({rotation:-53.9,x:610.9,y:775.7},0).wait(1).to({rotation:-31.4,x:601.9,y:746.1},0).wait(1).to({rotation:-8.9,x:619.4,y:719.3},0).wait(1).to({rotation:13.6,x:644.7,y:699.1},0).wait(1).to({rotation:36.1,x:672.3,y:682.3},0).wait(1).to({rotation:58.7,x:701.1,y:667.3},0).wait(1).to({rotation:81.2,x:730.4,y:653.7},0).wait(1).to({rotation:103.7,x:760.3,y:641},0).wait(1).to({rotation:126.2,x:790.4,y:629.1},0).wait(1).to({rotation:110.4,x:820.7,y:617.7},0).wait(1).to({rotation:94.7,x:851.1,y:606.8},0).wait(1).to({rotation:78.9,x:881.7,y:596.3},0).wait(1).to({rotation:63.1,x:912.5,y:586.2},0).wait(1).to({rotation:47.3,x:943.3,y:576.3},0).wait(1).to({rotation:31.6,x:974.2,y:566.7},0).wait(1).to({rotation:15.8,x:1005.2,y:557.3},0).wait(1).to({rotation:0,x:1036.3,y:548.1},0).wait(1).to({regX:29.2,x:1036.4},0).wait(1).to({regX:29.1,scaleX:1.02,scaleY:1.03,x:1039.9,y:554.4},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1043.6,y:560.6},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1047.2,y:566.9},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1050.9,y:573.1},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1054.5,y:579.4},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1058.2,y:585.7},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1061.8,y:591.9},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1065.4,y:598.2},0).wait(1).to({regX:29.2,x:1065.6},0).wait(32));

	// Guainía
	this.Guainia = new lib.Guainía();
	this.Guainia.parent = this;
	this.Guainia.setTransform(268.8,590.4,1,1,0,0,0,67.5,42.5);
	this.Guainia._off = true;
	new cjs.ButtonHelper(this.Guainia, 0, 1, 2, false, new lib.Guainía(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Guainia).wait(1).to({_off:false},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-12.5,x:304.1,y:601.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-25,x:339.7,y:612.4},0).wait(1).to({scaleX:0.9,scaleY:0.91,rotation:-37.5,x:375.3,y:623.1},0).wait(1).to({scaleX:0.87,scaleY:0.88,rotation:-50,x:410.9,y:633.6},0).wait(1).to({scaleX:0.84,scaleY:0.85,rotation:-62.5,x:446.6,y:644},0).wait(1).to({scaleX:0.81,scaleY:0.82,rotation:-75,x:482.4,y:654.1},0).wait(1).to({scaleX:0.78,scaleY:0.79,rotation:-87.5,x:518.2,y:663.9},0).wait(1).to({scaleX:0.75,scaleY:0.76,rotation:-100,x:554.1,y:673.6},0).wait(1).to({scaleX:0.71,scaleY:0.72,rotation:-72,x:590.1,y:683},0).wait(1).to({scaleX:0.68,scaleY:0.69,rotation:-44,x:626.1,y:692.2},0).wait(1).to({scaleX:0.65,scaleY:0.66,rotation:-16,x:662.2,y:701.1},0).wait(1).to({scaleX:0.62,scaleY:0.63,rotation:12,x:698.3,y:709.7},0).wait(1).to({scaleX:0.59,scaleY:0.6,rotation:40,x:734.5,y:718.1},0).wait(1).to({scaleX:0.55,scaleY:0.57,rotation:68,x:770.9,y:726.2},0).wait(1).to({scaleX:0.52,scaleY:0.54,rotation:96,x:807.2,y:733.9},0).wait(1).to({scaleX:0.49,scaleY:0.51,rotation:124,x:843.6,y:741.3},0).wait(1).to({scaleX:0.46,scaleY:0.48,rotation:152,x:880.1,y:748.3},0).wait(1).to({scaleX:0.43,scaleY:0.45,rotation:180,x:916.7,y:755},0).wait(1).to({scaleX:0.46,scaleY:0.48,rotation:168.5,x:953.4,y:761.2},0).wait(1).to({scaleX:0.49,scaleY:0.51,rotation:157,x:990.1,y:766.9},0).wait(1).to({scaleX:0.52,scaleY:0.55,rotation:145.6,x:1026.9,y:772.1},0).wait(1).to({scaleX:0.55,scaleY:0.58,rotation:134.1,x:1063.7,y:776.8},0).wait(1).to({scaleX:0.59,scaleY:0.61,rotation:122.6,x:1100.7,y:780.6},0).wait(1).to({scaleX:0.62,scaleY:0.64,rotation:111.1,x:1137.7,y:783.7},0).wait(1).to({scaleX:0.65,scaleY:0.67,rotation:99.7,x:1174.9,y:785.8},0).wait(1).to({scaleX:0.68,scaleY:0.71,rotation:88.2,x:1212,y:786.5},0).wait(1).to({scaleX:0.72,scaleY:0.74,rotation:76.7,x:1249.2,y:785.5},0).wait(1).to({scaleX:0.75,scaleY:0.77,rotation:65.2,x:1286.2,y:782.1},0).wait(1).to({scaleX:0.78,scaleY:0.8,rotation:57.1,x:1322.4,y:773.9},0).wait(1).to({scaleX:0.81,scaleY:0.84,rotation:49,x:1354.1,y:755.4},0).wait(1).to({scaleX:0.84,scaleY:0.87,rotation:40.9,x:1357.2,y:720.5},0).wait(1).to({scaleX:0.88,scaleY:0.9,rotation:32.8,x:1335.4,y:690.7},0).wait(1).to({scaleX:0.91,scaleY:0.93,rotation:24.7,x:1307.5,y:666.2},0).wait(1).to({scaleX:0.94,scaleY:0.96,rotation:16.6,x:1277.2,y:644.5},0).wait(1).to({scaleX:0.97,scaleY:1,rotation:8.5,x:1245.8,y:624.7},0).wait(1).to({scaleX:1,scaleY:1.03,rotation:0.4,x:1213.6,y:606.1},0).wait(1).to({regX:67.3,regY:42.6,rotation:0.3,x:1213.7,y:606.2},0).wait(1).to({regX:67.5,regY:42.5,scaleX:1.03,scaleY:1.06,x:1221.5,y:613.9},0).wait(1).to({scaleX:1.05,scaleY:1.08,x:1229.1,y:621.7},0).wait(1).to({scaleX:1.07,scaleY:1.11,x:1236.7,y:629.4},0).wait(1).to({scaleX:1.09,scaleY:1.14,x:1244.3,y:637.3},0).wait(1).to({scaleX:1.12,scaleY:1.16,x:1251.9,y:645},0).wait(1).to({scaleX:1.14,scaleY:1.19,x:1259.5,y:652.8},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:1267.1,y:660.5},0).wait(1).to({scaleX:1.18,scaleY:1.24,x:1274.7,y:668.3},0).wait(1).to({regY:42.6,x:1274.4,y:668.5},0).wait(32));

	// Guajira
	this.Guajira = new lib.Guajira();
	this.Guajira.parent = this;
	this.Guajira.setTransform(1091.1,917.6,1,1,0,0,0,39.5,30.3);
	this.Guajira._off = true;
	new cjs.ButtonHelper(this.Guajira, 0, 1, 2, false, new lib.Guajira(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Guajira).wait(1).to({_off:false},0).wait(1).to({scaleX:1.08,scaleY:1.05,rotation:20.6,x:1073.9,y:899.7},0).wait(1).to({scaleX:1.15,scaleY:1.1,rotation:41.3,x:1058.7,y:880.2},0).wait(1).to({scaleX:1.23,scaleY:1.15,rotation:61.9,x:1045.8,y:859.1},0).wait(1).to({scaleX:1.3,scaleY:1.2,rotation:82.5,x:1035.4,y:836.6},0).wait(1).to({scaleX:1.38,scaleY:1.25,rotation:103.1,x:1027.8,y:813.1},0).wait(1).to({scaleX:1.45,scaleY:1.3,rotation:123.8,x:1022.8,y:788.8},0).wait(1).to({scaleX:1.53,scaleY:1.35,rotation:144.4,x:1020.6,y:764.2},0).wait(1).to({scaleX:1.61,scaleY:1.4,rotation:165,x:1021.1,y:739.4},0).wait(1).to({scaleX:1.68,scaleY:1.45,rotation:134.1,x:1024.2,y:714.9},0).wait(1).to({scaleX:1.76,scaleY:1.5,rotation:103.2,x:1029.9,y:690.9},0).wait(1).to({scaleX:1.83,scaleY:1.54,rotation:72.3,x:1038.1,y:667.6},0).wait(1).to({scaleX:1.91,scaleY:1.59,rotation:41.4,x:1048.9,y:645.4},0).wait(1).to({scaleX:1.98,scaleY:1.64,rotation:10.5,x:1062,y:624.3},0).wait(1).to({scaleX:2.06,scaleY:1.69,rotation:-20.4,x:1077.4,y:605},0).wait(1).to({scaleX:2.13,scaleY:1.74,rotation:-51.3,x:1095,y:587.6},0).wait(1).to({scaleX:2.21,scaleY:1.79,rotation:-82.2,x:1114.7,y:572.6},0).wait(1).to({scaleX:2.29,scaleY:1.84,rotation:-113.1,x:1136.3,y:560.4},0).wait(1).to({scaleX:2.36,scaleY:1.89,rotation:-144,x:1159.3,y:551.5},0).wait(1).to({scaleX:2.29,scaleY:1.85,rotation:-119.1,x:1183.4,y:546.2},0).wait(1).to({scaleX:2.21,scaleY:1.8,rotation:-94.2,x:1208,y:544.6},0).wait(1).to({scaleX:2.13,scaleY:1.76,rotation:-69.3,x:1233.3,y:546.5},0).wait(1).to({scaleX:2.06,scaleY:1.71,rotation:-44.4,x:1258.3,y:547.9},0).wait(1).to({scaleX:1.98,scaleY:1.67,rotation:-19.4,x:1283.3,y:544.8},0).wait(1).to({scaleX:1.91,scaleY:1.62,rotation:5.5,x:1298.8,y:530.1},0).wait(1).to({scaleX:1.83,scaleY:1.58,rotation:30.4,x:1291.8,y:506.6},0).wait(1).to({scaleX:1.76,scaleY:1.53,rotation:55.3,x:1276.7,y:486.6},0).wait(1).to({scaleX:1.68,scaleY:1.49,rotation:80.3,x:1259.5,y:468.7},0).wait(1).to({scaleX:1.61,scaleY:1.44,rotation:105.2,x:1241.2,y:452},0).wait(1).to({scaleX:1.53,scaleY:1.4,rotation:92,x:1222.1,y:436.1},0).wait(1).to({scaleX:1.46,scaleY:1.35,rotation:78.9,x:1202.6,y:420.9},0).wait(1).to({scaleX:1.38,scaleY:1.31,rotation:65.7,x:1182.7,y:406.1},0).wait(1).to({scaleX:1.31,scaleY:1.26,rotation:52.6,x:1162.5,y:391.9},0).wait(1).to({scaleX:1.23,scaleY:1.22,rotation:39.4,x:1142,y:378},0).wait(1).to({scaleX:1.16,scaleY:1.17,rotation:26.3,x:1121.2,y:364.6},0).wait(1).to({scaleX:1.08,scaleY:1.13,rotation:13.1,x:1100.2,y:351.6},0).wait(1).to({scaleX:1,scaleY:1.08,rotation:0,x:1078.9,y:338.9},0).wait(1).to({regX:0,regY:0,x:1039.2,y:306.2},0).wait(1).to({regX:39.5,regY:30.3,scaleX:1.03,scaleY:1.11,x:1083.5,y:339.7},0).wait(1).to({scaleX:1.05,scaleY:1.14,x:1088.1,y:340.5},0).wait(1).to({scaleX:1.07,scaleY:1.17,x:1092.7,y:341.3},0).wait(1).to({scaleX:1.1,scaleY:1.2,x:1097.3,y:342.1},0).wait(1).to({scaleX:1.12,scaleY:1.22,x:1101.9,y:342.8},0).wait(1).to({scaleX:1.14,scaleY:1.25,x:1106.5,y:343.6},0).wait(1).to({scaleX:1.16,scaleY:1.28,x:1111.1,y:344.3},0).wait(1).to({scaleX:1.18,scaleY:1.31,x:1115.7,y:345.2},0).wait(1).to({regX:0,regY:0,x:1069,y:305.5},0).wait(32));

	// Huila
	this.Huila = new lib.Huila();
	this.Huila.parent = this;
	this.Huila.setTransform(566.8,323,1,1,0,0,0,32.4,33);
	this.Huila._off = true;
	new cjs.ButtonHelper(this.Huila, 0, 1, 2, false, new lib.Huila(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Huila).wait(1).to({_off:false},0).wait(1).to({regX:32.3,rotation:-22.5,x:553.6,y:336.1},0).wait(1).to({rotation:-45,x:541.3,y:349.9},0).wait(1).to({rotation:-67.4,x:530.1,y:364.6},0).wait(1).to({rotation:-89.9,x:520.2,y:380.3},0).wait(1).to({rotation:-112.4,x:512.3,y:397},0).wait(1).to({rotation:-134.9,x:507.2,y:414.7},0).wait(1).to({rotation:-157.4,x:506,y:433.2},0).wait(1).to({rotation:-179.9,x:509.4,y:451.3},0).wait(1).to({rotation:-156.7,x:517,y:468.2},0).wait(1).to({rotation:-133.6,x:528,y:483},0).wait(1).to({rotation:-110.4,x:541.1,y:496},0).wait(1).to({rotation:-87.3,x:555.8,y:507.3},0).wait(1).to({rotation:-64.1,x:571.3,y:517.3},0).wait(1).to({rotation:-41,x:587.6,y:526.1},0).wait(1).to({rotation:-17.9,x:604.2,y:534.1},0).wait(1).to({rotation:5.3,x:621.3,y:541.3},0).wait(1).to({rotation:28.4,x:638.6,y:547.8},0).wait(1).to({rotation:51.6,x:656.1,y:553.9},0).wait(1).to({rotation:41.1,x:673.7,y:559.4},0).wait(1).to({rotation:30.6,x:691.5,y:564.6},0).wait(1).to({rotation:20.1,x:709.4,y:569.5},0).wait(1).to({rotation:9.6,x:727.4,y:574},0).wait(1).to({rotation:-0.9,x:745.4,y:578.2},0).wait(1).to({rotation:-11.4,x:763.4,y:582.1},0).wait(1).to({rotation:-21.9,x:781.6,y:585.8},0).wait(1).to({rotation:-32.4,x:799.8,y:589.3},0).wait(1).to({rotation:-42.9,x:818,y:592.6},0).wait(1).to({rotation:-53.4,x:836.3,y:595.8},0).wait(1).to({rotation:-46.7,x:854.5,y:598.7},0).wait(1).to({rotation:-39.9,x:872.8,y:601.5},0).wait(1).to({rotation:-33.2,x:891.1,y:604.2},0).wait(1).to({rotation:-26.5,x:909.5,y:606.7},0).wait(1).to({rotation:-19.8,x:927.9,y:609.1},0).wait(1).to({rotation:-13.1,x:946.2,y:611.4},0).wait(1).to({rotation:-6.4,x:964.6,y:613.5},0).wait(1).to({rotation:0.3,x:983,y:615.6},0).wait(1).to({regX:32.4,regY:32.8,rotation:0.3,x:982.8,y:616},0).wait(1).to({regX:32.3,regY:33,scaleX:1.02,scaleY:1.03,x:985.2,y:624.2},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:987.7,y:632.2},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:990.1,y:640.2},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:992.6,y:648.2},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:995,y:656.3},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:997.4,y:664.3},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:999.9,y:672.4},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1002.4,y:680.4},0).wait(1).to({regX:32.4,x:1002.5,y:680.3},0).wait(32));

	// Magdalena
	this.Magdalena = new lib.Magdalena();
	this.Magdalena.parent = this;
	this.Magdalena.setTransform(349.4,735.9,1,1,0,0,0,21,34);
	this.Magdalena._off = true;
	new cjs.ButtonHelper(this.Magdalena, 0, 1, 2, false, new lib.Magdalena(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Magdalena).wait(1).to({_off:false},0).wait(1).to({rotation:20.6,x:378.2,y:735.7},0).wait(1).to({rotation:41.2,x:407,y:735.4},0).wait(1).to({rotation:61.9,x:435.8,y:734.9},0).wait(1).to({rotation:82.5,x:464.6,y:734.3},0).wait(1).to({rotation:103.1,x:493.4,y:733.6},0).wait(1).to({rotation:123.7,x:522.2,y:732.6},0).wait(1).to({rotation:144.4,x:551,y:731.4},0).wait(1).to({rotation:165,x:579.7,y:730.1},0).wait(1).to({rotation:145.8,x:608.5,y:728.4},0).wait(1).to({rotation:126.7,x:637.3,y:726.6},0).wait(1).to({rotation:107.5,x:666,y:724.6},0).wait(1).to({rotation:88.3,x:694.7,y:722.1},0).wait(1).to({rotation:69.1,x:723.5,y:719.4},0).wait(1).to({rotation:50,x:752,y:716.4},0).wait(1).to({rotation:30.8,x:780.7,y:712.9},0).wait(1).to({rotation:11.6,x:809.2,y:709},0).wait(1).to({rotation:-7.6,x:837.7,y:704.6},0).wait(1).to({rotation:-26.7,x:866.1,y:699.6},0).wait(1).to({rotation:-11.7,x:894.3,y:694},0).wait(1).to({rotation:3.3,x:922.4,y:687.6},0).wait(1).to({rotation:18.3,x:950.3,y:680.3},0).wait(1).to({rotation:33.3,x:977.9,y:671.9},0).wait(1).to({rotation:48.3,x:1004.9,y:662.2},0).wait(1).to({rotation:63.3,x:1031.3,y:650.6},0).wait(1).to({rotation:78.4,x:1056.7,y:636.9},0).wait(1).to({rotation:93.4,x:1080.1,y:620.2},0).wait(1).to({rotation:108.4,x:1100.4,y:599.7},0).wait(1).to({rotation:123.4,x:1114.7,y:575},0).wait(1).to({rotation:107.8,x:1120.8,y:546.9},0).wait(1).to({rotation:92.2,x:1117.9,y:518.3},0).wait(1).to({rotation:76.6,x:1108.4,y:491.2},0).wait(1).to({rotation:61,x:1094.6,y:465.9},0).wait(1).to({rotation:45.4,x:1078.1,y:442.3},0).wait(1).to({rotation:29.8,x:1059.7,y:420.2},0).wait(1).to({rotation:14.2,x:1039.9,y:399.2},0).wait(1).to({rotation:-1.4,x:1019.2,y:379.2},0).wait(1).to({regX:20.7,regY:33.8,rotation:-1.3,y:379.3},0).wait(1).to({regX:21,regY:34,scaleX:1.02,scaleY:1.03,x:1022.8,y:381.3},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1026.1,y:383.1},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1029.3,y:384.9},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1032.6,y:386.8},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1035.8,y:388.6},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1039.2,y:390.5},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1042.4,y:392.3},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1045.7,y:394.1},0).wait(1).to({regX:20.9,scaleX:1.18,x:1045.5,y:393.9},0).wait(32));

	// NorteDeSantander
	this.NorteDeSantander = new lib.NorteDeSantander();
	this.NorteDeSantander.parent = this;
	this.NorteDeSantander.setTransform(1578.8,281.6,1,1,0,0,0,22.5,34.2);
	this.NorteDeSantander._off = true;
	new cjs.ButtonHelper(this.NorteDeSantander, 0, 1, 2, false, new lib.NorteDeSantander(), 3);

	this.timeline.addTween(cjs.Tween.get(this.NorteDeSantander).wait(1).to({_off:false},0).wait(1).to({rotation:18.8,x:1591.8,y:299.8},0).wait(1).to({rotation:37.5,x:1604.3,y:318.4},0).wait(1).to({rotation:56.3,x:1616.1,y:337.4},0).wait(1).to({rotation:75,x:1626.9,y:357.1},0).wait(1).to({rotation:93.8,x:1636.6,y:377.3},0).wait(1).to({rotation:112.5,x:1644.4,y:398.3},0).wait(1).to({rotation:131.3,x:1649.7,y:420},0).wait(1).to({rotation:150,x:1651.1,y:442.4},0).wait(1).to({rotation:134.7,x:1646.5,y:464.3},0).wait(1).to({rotation:119.4,x:1634.9,y:483.3},0).wait(1).to({rotation:104.1,x:1617.7,y:497.5},0).wait(1).to({rotation:88.8,x:1597.5,y:507.2},0).wait(1).to({rotation:73.5,x:1576.1,y:513.5},0).wait(1).to({rotation:58.2,x:1554,y:517.4},0).wait(1).to({rotation:42.9,x:1531.7,y:519.6},0).wait(1).to({rotation:27.6,x:1509.3,y:520.5},0).wait(1).to({rotation:12.3,x:1486.9,y:520.3},0).wait(1).to({rotation:-3,x:1464.5,y:519.4},0).wait(1).to({rotation:-19.5,x:1442.1,y:517.8},0).wait(1).to({rotation:-36,x:1419.8,y:515.6},0).wait(1).to({rotation:-52.4,x:1397.5,y:512.9},0).wait(1).to({rotation:-68.9,x:1375.3,y:509.9},0).wait(1).to({rotation:-85.4,x:1353.2,y:506.4},0).wait(1).to({rotation:-101.9,x:1331.1,y:502.7},0).wait(1).to({rotation:-118.4,x:1309,y:498.7},0).wait(1).to({rotation:-134.9,x:1287.1,y:494.4},0).wait(1).to({rotation:-151.3,x:1265.1,y:489.9},0).wait(1).to({rotation:-167.8,x:1243.2,y:485.2},0).wait(1).to({rotation:-146.9,x:1221.3,y:480.3},0).wait(1).to({rotation:-125.9,x:1199.5,y:475.2},0).wait(1).to({rotation:-105,x:1177.7,y:470},0).wait(1).to({rotation:-84.1,x:1155.9,y:464.6},0).wait(1).to({rotation:-63.1,x:1134.1,y:459.1},0).wait(1).to({rotation:-42.2,x:1112.4,y:453.5},0).wait(1).to({rotation:-21.3,x:1090.8,y:447.7},0).wait(1).to({rotation:-0.3,x:1069.2,y:441.8},0).wait(1).to({regX:22.4,regY:34,rotation:-0.3},0).wait(1).to({regX:22.5,regY:34.2,scaleX:1.02,scaleY:1.03,x:1073.6,y:445.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1078,y:449},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1082.4,y:452.4},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1086.8,y:455.9},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1091.2,y:459.4},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1095.6,y:462.9},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1099.9,y:466.3},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1104.3,y:469.8},0).wait(1).to({regX:22.6,y:469.7},0).wait(32));

	// Risaralda
	this.Risaralda = new lib.Risaralda();
	this.Risaralda.parent = this;
	this.Risaralda.setTransform(676.7,278.6,1,1,0,0,0,13.5,11.5);
	this.Risaralda._off = true;
	new cjs.ButtonHelper(this.Risaralda, 0, 1, 2, false, new lib.Risaralda(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Risaralda).wait(1).to({_off:false},0).wait(1).to({scaleX:1.14,scaleY:1.17,rotation:19.8,x:704.1,y:285},0).wait(1).to({scaleX:1.28,scaleY:1.35,rotation:39.6,x:731.4,y:291.4},0).wait(1).to({scaleX:1.42,scaleY:1.52,rotation:59.4,x:758.7,y:297.8},0).wait(1).to({scaleX:1.56,scaleY:1.69,rotation:79.1,x:786.1,y:304.4},0).wait(1).to({scaleX:1.69,scaleY:1.87,rotation:98.9,x:813.5,y:311},0).wait(1).to({scaleX:1.83,scaleY:2.04,rotation:118.7,x:840.8,y:317.7},0).wait(1).to({scaleX:1.97,scaleY:2.21,rotation:138.5,x:868.1,y:324.5},0).wait(1).to({scaleX:2.11,scaleY:2.39,rotation:158.3,x:895.5,y:331.4},0).wait(1).to({scaleX:2.25,scaleY:2.56,rotation:136.6,x:922.7,y:338.5},0).wait(1).to({scaleX:2.39,scaleY:2.73,rotation:114.8,x:949.9,y:345.6},0).wait(1).to({scaleX:2.53,scaleY:2.91,rotation:93.1,x:977.1,y:353},0).wait(1).to({scaleX:2.67,scaleY:3.08,rotation:71.4,x:1004.2,y:360.4},0).wait(1).to({scaleX:2.81,scaleY:3.25,rotation:49.7,x:1031.3,y:368.1},0).wait(1).to({scaleX:2.94,scaleY:3.43,rotation:27.9,x:1058.4,y:375.9},0).wait(1).to({scaleX:3.08,scaleY:3.6,rotation:6.2,x:1085.5,y:384},0).wait(1).to({scaleX:3.22,scaleY:3.77,rotation:-15.5,x:1112.4,y:392.3},0).wait(1).to({scaleX:3.36,scaleY:3.95,rotation:-37.2,x:1139.3,y:400.9},0).wait(1).to({scaleX:3.5,scaleY:4.12,rotation:-59,x:1166.1,y:409.8},0).wait(1).to({scaleX:3.36,scaleY:3.95,rotation:-67.6,x:1192.5,y:419.4},0).wait(1).to({scaleX:3.22,scaleY:3.78,rotation:-76.2,x:1218.8,y:429.5},0).wait(1).to({scaleX:3.08,scaleY:3.6,rotation:-84.9,x:1244.5,y:440.7},0).wait(1).to({scaleX:2.94,scaleY:3.43,rotation:-93.5,x:1269.6,y:453.5},0).wait(1).to({scaleX:2.79,scaleY:3.26,rotation:-102.1,x:1292.6,y:469.6},0).wait(1).to({scaleX:2.65,scaleY:3.09,rotation:-110.8,x:1300.9,y:494.1},0).wait(1).to({scaleX:2.51,scaleY:2.92,rotation:-119.4,x:1278,y:509.7},0).wait(1).to({scaleX:2.37,scaleY:2.75,rotation:-128,x:1251,y:517.6},0).wait(1).to({scaleX:2.23,scaleY:2.57,rotation:-136.6,x:1223.3,y:522.9},0).wait(1).to({scaleX:2.09,scaleY:2.4,rotation:-145.3,x:1195.5,y:526.8},0).wait(1).to({scaleX:1.95,scaleY:2.23,rotation:-127.1,x:1167.5,y:529.7},0).wait(1).to({scaleX:1.8,scaleY:2.06,rotation:-109,x:1139.4,y:532.1},0).wait(1).to({scaleX:1.66,scaleY:1.89,rotation:-90.9,x:1111.3,y:533.9},0).wait(1).to({scaleX:1.52,scaleY:1.72,rotation:-72.7,x:1083.2,y:535.4},0).wait(1).to({scaleX:1.38,scaleY:1.55,rotation:-54.6,x:1055.1,y:536.6},0).wait(1).to({scaleX:1.24,scaleY:1.37,rotation:-36.5,x:1026.9,y:537.4},0).wait(1).to({scaleX:1.1,scaleY:1.2,rotation:-18.3,x:998.7,y:538.1},0).wait(1).to({scaleX:0.96,scaleY:1.03,rotation:-0.2,x:970.6,y:538.5},0).wait(1).to({regY:11.4,rotation:0},0).wait(1).to({regY:11.5,scaleX:0.98,scaleY:1.06,x:972.8,y:544.6},0).wait(1).to({scaleX:1,scaleY:1.09,x:975,y:550.6},0).wait(1).to({scaleX:1.02,scaleY:1.11,x:977.2,y:556.7},0).wait(1).to({scaleX:1.04,scaleY:1.14,x:979.4,y:562.7},0).wait(1).to({scaleX:1.06,scaleY:1.17,x:981.6,y:568.7},0).wait(1).to({scaleX:1.08,scaleY:1.19,x:983.7,y:574.7},0).wait(1).to({scaleX:1.1,scaleY:1.22,x:985.9,y:580.7},0).wait(1).to({scaleX:1.13,scaleY:1.25,x:988.2,y:586.7},0).wait(1).to({y:586.8},0).wait(32));

	// Vichada
	this.Vichada = new lib.Vichada();
	this.Vichada.parent = this;
	this.Vichada.setTransform(1380.6,941.9,1,1,0,0,0,58.5,54.6);
	this.Vichada._off = true;
	new cjs.ButtonHelper(this.Vichada, 0, 1, 2, false, new lib.Vichada(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Vichada).wait(1).to({_off:false},0).wait(1).to({rotation:10.2,x:1390.8,y:912.9},0).wait(1).to({rotation:20.5,x:1400.9,y:883.7},0).wait(1).to({rotation:30.7,x:1410.9,y:854.6},0).wait(1).to({rotation:41,x:1420.8,y:825.4},0).wait(1).to({rotation:51.2,x:1430.6,y:796.1},0).wait(1).to({rotation:61.5,x:1440.1,y:766.9},0).wait(1).to({rotation:71.7,x:1449.5,y:737.5},0).wait(1).to({rotation:81.9,x:1458.7,y:708.1},0).wait(1).to({rotation:90.9,x:1467.7,y:678.6},0).wait(1).to({rotation:100,x:1476.5,y:649},0).wait(1).to({rotation:109,x:1484.9,y:619.4},0).wait(1).to({rotation:118,x:1493,y:589.7},0).wait(1).to({rotation:127,x:1500.8,y:559.8},0).wait(1).to({rotation:136,x:1508.2,y:529.9},0).wait(1).to({rotation:145,x:1515.1,y:499.8},0).wait(1).to({rotation:154,x:1521.3,y:469.6},0).wait(1).to({rotation:163,x:1526.5,y:439.3},0).wait(1).to({rotation:172,x:1530.8,y:408.7},0).wait(1).to({rotation:146.5,x:1533.3,y:378},0).wait(1).to({rotation:121,x:1533.4,y:347.2},0).wait(1).to({rotation:95.5,x:1528.7,y:316.9},0).wait(1).to({rotation:70,x:1513.3,y:290.7},0).wait(1).to({rotation:44.5,x:1484.2,y:284},0).wait(1).to({rotation:19,x:1455.1,y:293.9},0).wait(1).to({rotation:-6.5,x:1428.6,y:309.5},0).wait(1).to({rotation:-32,x:1403.9,y:327.9},0).wait(1).to({rotation:-57.5,x:1380.2,y:347.7},0).wait(1).to({rotation:-83,x:1357.5,y:368.4},0).wait(1).to({rotation:-72.7,x:1335.4,y:389.9},0).wait(1).to({rotation:-62.4,x:1313.8,y:411.8},0).wait(1).to({rotation:-52.1,x:1292.6,y:434.2},0).wait(1).to({rotation:-41.8,x:1271.8,y:457},0).wait(1).to({rotation:-31.4,x:1251.2,y:480},0).wait(1).to({rotation:-21.1,x:1231,y:503.2},0).wait(1).to({rotation:-10.8,x:1210.9,y:526.6},0).wait(1).to({rotation:-0.5,x:1191.1,y:550.2},0).wait(1).to({regY:54.5},0).wait(1).to({regY:54.6,scaleX:1.02,scaleY:1.03,x:1198.2,y:556.6},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1205.2,y:562.9},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1212.3,y:569.2},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1219.5,y:575.5},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1226.5,y:581.9},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1233.6,y:588.2},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1240.7,y:594.5},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1247.8,y:600.8},0).wait(1).to({regY:54.5,y:600.7},0).wait(32));

	// Vaupés
	this.Vaupes = new lib.Vaupés();
	this.Vaupes.parent = this;
	this.Vaupes.setTransform(758.2,947.4,1,1,0,0,0,46.3,47);
	this.Vaupes._off = true;
	new cjs.ButtonHelper(this.Vaupes, 0, 1, 2, false, new lib.Vaupés(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Vaupes).wait(1).to({_off:false},0).wait(1).to({rotation:-16.7,x:731.5,y:917},0).wait(1).to({rotation:-33.3,x:705.1,y:886.4},0).wait(1).to({rotation:-50,x:678.9,y:855.6},0).wait(1).to({rotation:-66.6,x:652.9,y:824.6},0).wait(1).to({rotation:-83.3,x:627.1,y:793.4},0).wait(1).to({rotation:-99.9,x:601.7,y:761.9},0).wait(1).to({rotation:-116.6,x:576.7,y:730.2},0).wait(1).to({rotation:-133.2,x:552.1,y:698},0).wait(1).to({rotation:-112.4,x:528.1,y:665.5},0).wait(1).to({rotation:-91.5,x:504.8,y:632.4},0).wait(1).to({rotation:-70.7,x:482.3,y:598.8},0).wait(1).to({rotation:-49.9,x:461.2,y:564.4},0).wait(1).to({rotation:-29,x:441.7,y:528.9},0).wait(1).to({rotation:-8.2,x:425.1,y:492},0).wait(1).to({rotation:12.7,x:414.1,y:453.2},0).wait(1).to({rotation:33.5,x:417.7,y:413.5},0).wait(1).to({rotation:54.3,x:448.8,y:389.7},0).wait(1).to({rotation:75.2,x:488.9,y:386.7},0).wait(1).to({rotation:82.5,x:529,y:392.2},0).wait(1).to({rotation:89.9,x:568.3,y:401.7},0).wait(1).to({rotation:97.2,x:606.9,y:413.6},0).wait(1).to({rotation:104.6,x:645,y:427.1},0).wait(1).to({rotation:111.9,x:682.8,y:441.7},0).wait(1).to({rotation:119.3,x:720.1,y:457.2},0).wait(1).to({rotation:126.6,x:757.2,y:473.4},0).wait(1).to({rotation:134,x:794,y:490.2},0).wait(1).to({rotation:141.3,x:830.6,y:507.5},0).wait(1).to({rotation:148.7,x:867,y:525.1},0).wait(1).to({rotation:129.9,x:903.2,y:543.1},0).wait(1).to({rotation:111.2,x:939.2,y:561.4},0).wait(1).to({rotation:92.4,x:975.2,y:580},0).wait(1).to({rotation:73.7,x:1010.9,y:598.9},0).wait(1).to({rotation:54.9,x:1046.7,y:617.9},0).wait(1).to({rotation:36.2,x:1082.2,y:637.2},0).wait(1).to({rotation:17.4,x:1117.7,y:656.6},0).wait(1).to({rotation:-1.3,x:1153.2,y:676.2},0).wait(1).to({regX:46.2,regY:46.8,rotation:-1.3,x:1153.1,y:676.3},0).wait(1).to({regX:46.3,regY:47,scaleX:1.02,scaleY:1.03,x:1159.4,y:686},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1165.7,y:695.7},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1171.9,y:705.3},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1178.2,y:714.9},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1184.4,y:724.5},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1190.7,y:734.1},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1197,y:743.7},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1203.2,y:753.4},0).wait(1).to({regX:46.2,regY:46.9,scaleX:1.18,x:1203.1,y:753},0).wait(32));

	// Valle
	this.Valle = new lib.Valle();
	this.Valle.parent = this;
	this.Valle.setTransform(1641.8,636.2,1,1,0,0,0,28,29.9);
	this.Valle._off = true;
	new cjs.ButtonHelper(this.Valle, 0, 1, 2, false, new lib.Valle(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Valle).wait(1).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.11,rotation:18,x:1615.4,y:616.8},0).wait(1).to({scaleX:1.2,scaleY:1.22,rotation:36.1,x:1589.1,y:597.4},0).wait(1).to({scaleX:1.3,scaleY:1.33,rotation:54.1,x:1562.6,y:578.2},0).wait(1).to({scaleX:1.4,scaleY:1.45,rotation:72.1,x:1536.1,y:559.1},0).wait(1).to({scaleX:1.5,scaleY:1.56,rotation:90.2,x:1509.3,y:540.1},0).wait(1).to({scaleX:1.6,scaleY:1.67,rotation:108.2,x:1482.6,y:521.3},0).wait(1).to({scaleX:1.7,scaleY:1.78,rotation:126.2,x:1455.8,y:502.5},0).wait(1).to({scaleX:1.8,scaleY:1.89,rotation:144.3,x:1428.9,y:484},0).wait(1).to({scaleX:1.9,scaleY:2,rotation:127.4,x:1401.7,y:465.7},0).wait(1).to({scaleX:2,scaleY:2.11,rotation:110.6,x:1374.4,y:447.6},0).wait(1).to({scaleX:2.1,scaleY:2.22,rotation:93.8,x:1347.1,y:429.8},0).wait(1).to({scaleX:2.2,scaleY:2.34,rotation:77,x:1319.5,y:412.2},0).wait(1).to({scaleX:2.3,scaleY:2.45,rotation:60.1,x:1291.8,y:394.9},0).wait(1).to({scaleX:2.4,scaleY:2.56,rotation:43.3,x:1263.9,y:377.9},0).wait(1).to({scaleX:2.5,scaleY:2.67,rotation:0,skewX:26.5,skewY:26.6,x:1235.8,y:361.2},0).wait(1).to({scaleX:2.6,scaleY:2.78,skewX:9.7,skewY:9.7,x:1207.4,y:345},0).wait(1).to({scaleX:2.7,scaleY:2.89,skewX:-7.1,skewY:-7.1,x:1178.8,y:329.3},0).wait(1).to({scaleX:2.8,scaleY:3,skewX:-24,skewY:-23.9,x:1149.8,y:314.1},0).wait(1).to({scaleX:2.71,scaleY:2.89,skewX:-5.9,skewY:-5.9,x:1120.4,y:299.7},0).wait(1).to({scaleX:2.61,scaleY:2.78,skewX:12.1,skewY:12.1,x:1090.6,y:286.2},0).wait(1).to({scaleX:2.51,scaleY:2.66,skewX:30.1,skewY:30.1,x:1060.3,y:273.8},0).wait(1).to({scaleX:2.41,scaleY:2.55,skewX:48.1,skewY:48.2,x:1029.4,y:263.1},0).wait(1).to({scaleX:2.32,scaleY:2.43,skewX:66.1,skewY:66.2,x:997.7,y:254.7},0).wait(1).to({scaleX:2.22,scaleY:2.32,skewX:84.1,skewY:84.2,x:965.4,y:249.9},0).wait(1).to({scaleX:2.12,scaleY:2.21,skewX:102.1,skewY:102.2,x:932.8,y:251.5},0).wait(1).to({scaleX:2.02,scaleY:2.09,skewX:120.1,skewY:120.2,x:903.1,y:264.4},0).wait(1).to({scaleX:1.93,scaleY:1.98,skewX:138.1,skewY:138.2,x:884.1,y:290.5},0).wait(1).to({scaleX:1.83,scaleY:1.86,skewX:156.1,skewY:156.2,x:877.2,y:322.3},0).wait(1).to({scaleX:1.73,scaleY:1.75,skewX:136.5,skewY:136.6,x:877.7,y:355},0).wait(1).to({scaleX:1.63,scaleY:1.64,skewX:116.9,skewY:117,x:882.4,y:387.4},0).wait(1).to({scaleX:1.54,scaleY:1.52,skewX:97.3,skewY:97.5,x:889.8,y:419.3},0).wait(1).to({scaleX:1.44,scaleY:1.41,skewX:77.8,skewY:77.9,x:899,y:450.7},0).wait(1).to({scaleX:1.34,scaleY:1.29,skewX:58.2,skewY:58.3,x:909.5,y:481.7},0).wait(1).to({scaleX:1.24,scaleY:1.18,skewX:38.6,skewY:38.7,x:921.1,y:512.2},0).wait(1).to({scaleX:1.15,scaleY:1.07,skewX:19,skewY:19.1,x:933.4,y:542.6},0).wait(1).to({scaleX:1.05,scaleY:0.95,skewX:-0.6,skewY:-0.5,x:946.4,y:572.6},0).wait(1).to({regY:29.6,rotation:-0.3,skewX:0,skewY:0,x:945.9,y:572.7},0).wait(1).to({regY:29.9,scaleX:1.07,scaleY:0.98,rotation:-0.5,x:947.5,y:579.9},0).wait(1).to({scaleX:1.1,scaleY:1,x:949.2,y:586.8},0).wait(1).to({scaleX:1.12,scaleY:1.03,x:950.8,y:593.7},0).wait(1).to({scaleX:1.14,scaleY:1.05,x:952.4,y:600.6},0).wait(1).to({scaleX:1.17,scaleY:1.08,x:954.1,y:607.5},0).wait(1).to({scaleX:1.19,scaleY:1.1,x:955.7,y:614.4},0).wait(1).to({scaleX:1.21,scaleY:1.13,x:957.4,y:621.3},0).wait(1).to({scaleX:1.24,scaleY:1.15,x:959,y:628.2},0).wait(1).to({regY:29.8,rotation:-0.3,y:627.9},0).wait(32));

	// Tolima
	this.Tolima = new lib.Tolima();
	this.Tolima.parent = this;
	this.Tolima.setTransform(1576.8,746.4,1,1,0,0,0,24.5,35.8);
	this.Tolima._off = true;
	new cjs.ButtonHelper(this.Tolima, 0, 1, 2, false, new lib.Tolima(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Tolima).wait(1).to({_off:false},0).wait(1).to({rotation:22.5,x:1554.1,y:761.4},0).wait(1).to({rotation:45,x:1531.2,y:776.3},0).wait(1).to({rotation:67.5,x:1508.3,y:791},0).wait(1).to({rotation:90,x:1485.1,y:805.4},0).wait(1).to({rotation:112.5,x:1461.8,y:819.6},0).wait(1).to({rotation:135,x:1438.3,y:833.4},0).wait(1).to({rotation:157.5,x:1414.6,y:847},0).wait(1).to({rotation:180,x:1390.8,y:860.1},0).wait(1).to({rotation:162,x:1366.7,y:872.8},0).wait(1).to({rotation:144,x:1342.3,y:885.1},0).wait(1).to({rotation:126,x:1317.7,y:896.8},0).wait(1).to({rotation:108,x:1292.8,y:908},0).wait(1).to({rotation:90,x:1267.6,y:918.3},0).wait(1).to({rotation:72,x:1242,y:927.8},0).wait(1).to({rotation:54,x:1216.1,y:936.2},0).wait(1).to({rotation:36,x:1189.8,y:943.4},0).wait(1).to({rotation:18,x:1163.1,y:948.8},0).wait(1).to({rotation:0,x:1136,y:952.2},0).wait(1).to({rotation:18,x:1108.8,y:952.8},0).wait(1).to({rotation:36,x:1081.7,y:949.8},0).wait(1).to({rotation:54,x:1055.6,y:942.2},0).wait(1).to({rotation:72,x:1031.7,y:929.1},0).wait(1).to({rotation:90,x:1011.6,y:910.9},0).wait(1).to({rotation:108,x:996,y:888.6},0).wait(1).to({rotation:126,x:984.7,y:863.8},0).wait(1).to({rotation:144,x:977,y:837.7},0).wait(1).to({rotation:162,x:972.2,y:810.8},0).wait(1).to({rotation:180,x:969.7,y:783.7},0).wait(1).to({rotation:157.5,x:969,y:756.5},0).wait(1).to({rotation:135,x:969.7,y:729.2},0).wait(1).to({rotation:112.5,x:971.5,y:702},0).wait(1).to({rotation:90,x:974.4,y:674.9},0).wait(1).to({rotation:67.5,x:978.1,y:647.9},0).wait(1).to({rotation:45,x:982.4,y:620.9},0).wait(1).to({rotation:22.5,x:987.4,y:594.2},0).wait(1).to({rotation:0,x:993,y:567.5},0).wait(2).to({scaleX:1.02,scaleY:1.03,x:995.6,y:574.2},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:998.3,y:581},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1001,y:587.7},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1003.7,y:594.5},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1006.3,y:601.3},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1009,y:608},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1011.7,y:614.8},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1014.4,y:621.5},0).wait(1).to({regX:24.6,x:1014.5,y:621.6},0).wait(32));

	// Sucre
	this.Sucre = new lib.Sucre();
	this.Sucre.parent = this;
	this.Sucre.setTransform(1548.3,876.7,1,1,0,0,0,16.9,23.2);
	this.Sucre._off = true;
	new cjs.ButtonHelper(this.Sucre, 0, 1, 2, false, new lib.Sucre(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sucre).wait(1).to({_off:false},0).wait(1).to({regX:17,scaleX:1.05,scaleY:1.07,rotation:-12.5,x:1516.6,y:859.6},0).wait(1).to({scaleX:1.1,scaleY:1.15,rotation:-25,x:1484.8,y:842.4},0).wait(1).to({scaleX:1.15,scaleY:1.22,rotation:-37.5,x:1453.1,y:825.3},0).wait(1).to({scaleX:1.2,scaleY:1.29,rotation:-50,x:1421.3,y:808.1},0).wait(1).to({scaleX:1.24,scaleY:1.36,rotation:-62.5,x:1389.6,y:790.9},0).wait(1).to({scaleX:1.29,scaleY:1.44,rotation:-75,x:1357.9,y:773.5},0).wait(1).to({scaleX:1.34,scaleY:1.51,rotation:-87.5,x:1326.3,y:756.2},0).wait(1).to({scaleX:1.39,scaleY:1.58,rotation:-100,x:1294.6,y:738.8},0).wait(1).to({scaleX:1.44,scaleY:1.66,rotation:-78.4,x:1263.2,y:721.3},0).wait(1).to({scaleX:1.49,scaleY:1.73,rotation:-56.7,x:1231.7,y:703.8},0).wait(1).to({scaleX:1.54,scaleY:1.8,rotation:-35.1,x:1200.1,y:686.2},0).wait(1).to({scaleX:1.58,scaleY:1.87,rotation:-13.5,x:1168.7,y:668.6},0).wait(1).to({scaleX:1.63,scaleY:1.95,rotation:8.1,x:1137.4,y:650.9},0).wait(1).to({scaleX:1.68,scaleY:2.02,rotation:29.7,x:1106,y:633},0).wait(1).to({scaleX:1.73,scaleY:2.09,rotation:51.3,x:1074.7,y:615.1},0).wait(1).to({scaleX:1.78,scaleY:2.17,rotation:73,x:1043.4,y:597},0).wait(1).to({scaleX:1.83,scaleY:2.24,rotation:94.6,x:1012.2,y:578.8},0).wait(1).to({scaleX:1.88,scaleY:2.31,rotation:116.2,x:981.1,y:560.5},0).wait(1).to({scaleX:1.83,scaleY:2.24,rotation:90.6,x:950.3,y:541.9},0).wait(1).to({scaleX:1.78,scaleY:2.17,rotation:65,x:919.5,y:523.1},0).wait(1).to({scaleX:1.73,scaleY:2.1,rotation:39.4,x:888.8,y:504.1},0).wait(1).to({scaleX:1.68,scaleY:2.02,rotation:13.8,x:858.4,y:484.8},0).wait(1).to({scaleX:1.63,scaleY:1.95,rotation:-11.8,x:828.1,y:465},0).wait(1).to({scaleX:1.59,scaleY:1.88,rotation:-37.4,x:798.2,y:444.8},0).wait(1).to({scaleX:1.54,scaleY:1.81,rotation:-63,x:768.9,y:423.7},0).wait(1).to({scaleX:1.49,scaleY:1.74,rotation:-88.5,x:740.4,y:401.5},0).wait(1).to({scaleX:1.44,scaleY:1.66,rotation:-114.1,x:714.3,y:376.7},0).wait(1).to({scaleX:1.39,scaleY:1.59,rotation:-139.7,x:712.9,y:347.9},0).wait(1).to({scaleX:1.34,scaleY:1.52,rotation:-122.3,x:748.8,y:347.4},0).wait(1).to({scaleX:1.3,scaleY:1.45,rotation:-104.8,x:784.4,y:353.3},0).wait(1).to({scaleX:1.25,scaleY:1.37,rotation:-87.3,x:819.6,y:361.3},0).wait(1).to({scaleX:1.2,scaleY:1.3,rotation:-69.9,x:854.5,y:370.3},0).wait(1).to({scaleX:1.15,scaleY:1.23,rotation:-52.4,x:889.3,y:380.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,rotation:-34.9,x:923.9,y:390.4},0).wait(1).to({scaleX:1.05,scaleY:1.09,rotation:-17.5,x:958.4,y:401.1},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,x:992.8,y:412},0).wait(1).to({regX:16.9,regY:23.3,x:992.7,y:412.1},0).wait(1).to({regX:17,regY:23.2,scaleX:1.03,scaleY:1.04,x:995.5,y:414.7},0).wait(1).to({scaleX:1.05,scaleY:1.07,x:998.2,y:417.4},0).wait(1).to({scaleX:1.07,scaleY:1.09,x:1000.8,y:420.1},0).wait(1).to({scaleX:1.09,scaleY:1.12,x:1003.5,y:422.8},0).wait(1).to({scaleX:1.12,scaleY:1.15,x:1006.2,y:425.5},0).wait(1).to({scaleX:1.14,scaleY:1.17,x:1008.9,y:428.1},0).wait(1).to({scaleX:1.16,scaleY:1.2,x:1011.6,y:430.8},0).wait(1).to({scaleX:1.18,scaleY:1.23,x:1014.2,y:433.5},0).wait(1).to({regY:23.3,y:433.6},0).wait(32));

	// Santander
	this.Santander = new lib.Santander();
	this.Santander.parent = this;
	this.Santander.setTransform(1198.9,963.3,1,1,0,0,0,32.5,30.3);
	this.Santander._off = true;
	new cjs.ButtonHelper(this.Santander, 0, 1, 2, false, new lib.Santander(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Santander).wait(1).to({_off:false},0).wait(1).to({rotation:11.3,x:1228,y:956.3},0).wait(1).to({rotation:22.5,x:1256.9,y:948.5},0).wait(1).to({rotation:33.8,x:1285.5,y:939.9},0).wait(1).to({rotation:45,x:1314.1,y:930.7},0).wait(1).to({rotation:56.3,x:1342.4,y:920.8},0).wait(1).to({rotation:67.5,x:1370.5,y:910.4},0).wait(1).to({rotation:78.8,x:1398.3,y:899.3},0).wait(1).to({rotation:90,x:1425.9,y:887.4},0).wait(1).to({rotation:64.1,x:1453,y:874.8},0).wait(1).to({rotation:38.1,x:1479.7,y:861.3},0).wait(1).to({rotation:12.2,x:1505.8,y:846.6},0).wait(1).to({rotation:-13.8,x:1531.1,y:830.3},0).wait(1).to({rotation:-39.7,x:1554.9,y:811.9},0).wait(1).to({rotation:-65.7,x:1575.8,y:790.2},0).wait(1).to({rotation:-91.6,x:1589.1,y:763.7},0).wait(1).to({rotation:-117.6,x:1584.9,y:736.7},0).wait(1).to({rotation:-143.5,x:1566.2,y:713},0).wait(1).to({rotation:-169.5,x:1543.2,y:693.3},0).wait(1).to({rotation:-157.5,x:1518.5,y:676},0).wait(1).to({rotation:-145.5,x:1492.8,y:660.3},0).wait(1).to({rotation:-133.5,x:1466.7,y:645.6},0).wait(1).to({rotation:-121.5,x:1440.1,y:631.7},0).wait(1).to({rotation:-109.5,x:1413.2,y:618.5},0).wait(1).to({rotation:-97.5,x:1386,y:605.8},0).wait(1).to({rotation:-85.5,x:1358.6,y:593.6},0).wait(1).to({rotation:-73.5,x:1331.1,y:581.8},0).wait(1).to({rotation:-61.5,x:1303.3,y:570.3},0).wait(1).to({rotation:-49.5,x:1275.5,y:559.3},0).wait(1).to({rotation:-43.3,x:1247.5,y:548.5},0).wait(1).to({rotation:-37,x:1219.4,y:538.1},0).wait(1).to({rotation:-30.8,x:1191.2,y:528},0).wait(1).to({rotation:-24.6,x:1162.9,y:518.2},0).wait(1).to({rotation:-18.3,x:1134.6,y:508.7},0).wait(1).to({rotation:-12.1,x:1106,y:499.7},0).wait(1).to({rotation:-5.9,x:1077.4,y:491},0).wait(1).to({rotation:0.4,x:1048.5,y:482.8},0).wait(1).to({regX:32.6,rotation:0.3,x:1048.6,y:483.5},0).wait(1).to({regX:32.5,scaleX:1.02,scaleY:1.03,x:1052.4,y:488},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1056.4,y:492.6},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1060.3,y:497.1},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1064.2,y:501.6},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1068.1,y:506.2},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1072.1,y:510.8},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1076,y:515.4},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1079.9,y:520},0).wait(1).to({regX:32.6,x:1080.1},0).wait(32));

	// Quindio
	this.Quindio = new lib.Quindio();
	this.Quindio.parent = this;
	this.Quindio.setTransform(925.8,961.3,1,1,0,0,0,8,8.8);
	this.Quindio._off = true;
	new cjs.ButtonHelper(this.Quindio, 0, 1, 2, false, new lib.Quindio(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Quindio).wait(1).to({_off:false},0).wait(1).to({scaleX:1.2,scaleY:1.19,rotation:12.6,x:931.6,y:950.1},0).wait(1).to({scaleX:1.41,scaleY:1.37,rotation:25.3,x:937.4,y:938.8},0).wait(1).to({scaleX:1.61,scaleY:1.56,rotation:37.9,x:943.1,y:927.5},0).wait(1).to({scaleX:1.81,scaleY:1.74,rotation:50.5,x:948.8,y:916.2},0).wait(1).to({scaleX:2.01,scaleY:1.93,rotation:63.1,x:954.4,y:904.7},0).wait(1).to({scaleX:2.22,scaleY:2.11,rotation:75.8,x:959.9,y:893.3},0).wait(1).to({scaleX:2.42,scaleY:2.3,rotation:88.4,x:965.4,y:881.8},0).wait(1).to({scaleX:2.62,scaleY:2.48,rotation:101,x:970.8,y:870.4},0).wait(1).to({scaleX:2.83,scaleY:2.67,rotation:78.5,x:976.1,y:858.8},0).wait(1).to({scaleX:3.03,scaleY:2.85,rotation:56,x:981.3,y:847.3},0).wait(1).to({scaleX:3.23,scaleY:3.04,rotation:33.5,x:986.5,y:835.8},0).wait(1).to({scaleX:3.43,scaleY:3.22,rotation:11,x:991.6,y:824.2},0).wait(1).to({scaleX:3.64,scaleY:3.41,rotation:-11.5,x:996.5,y:812.5},0).wait(1).to({scaleX:3.84,scaleY:3.59,rotation:-34,x:1001.4,y:800.7},0).wait(1).to({scaleX:4.04,scaleY:3.78,rotation:-56.5,x:1006.1,y:788.9},0).wait(1).to({scaleX:4.24,scaleY:3.96,rotation:-79,x:1010.6,y:776.9},0).wait(1).to({scaleX:4.45,scaleY:4.15,rotation:-101.5,x:1015,y:765},0).wait(1).to({scaleX:4.65,scaleY:4.33,rotation:-124,x:1019.1,y:752.9},0).wait(1).to({scaleX:4.44,scaleY:4.16,rotation:-103,x:1023.1,y:740.9},0).wait(1).to({scaleX:4.24,scaleY:3.98,rotation:-82,x:1026.8,y:728.8},0).wait(1).to({scaleX:4.03,scaleY:3.8,rotation:-60.9,x:1030.2,y:716.7},0).wait(1).to({scaleX:3.83,scaleY:3.63,rotation:-39.9,x:1033.3,y:704.4},0).wait(1).to({scaleX:3.62,scaleY:3.45,rotation:-18.9,x:1036.1,y:692.1},0).wait(1).to({scaleX:3.42,scaleY:3.28,rotation:2.1,x:1038.4,y:679.6},0).wait(1).to({scaleX:3.21,scaleY:3.1,rotation:23.1,x:1040.2,y:667.1},0).wait(1).to({scaleX:3,scaleY:2.92,rotation:44.1,x:1041.5,y:654.4},0).wait(1).to({scaleX:2.8,scaleY:2.75,rotation:65.1,x:1042,y:641.7},0).wait(1).to({scaleX:2.59,scaleY:2.57,rotation:86.2,x:1041.6,y:628.9},0).wait(1).to({scaleX:2.38,scaleY:2.4,rotation:75.5,x:1040,y:616.4},0).wait(1).to({scaleX:2.18,scaleY:2.22,rotation:64.9,x:1036.9,y:604.1},0).wait(1).to({scaleX:1.97,scaleY:2.05,rotation:54.2,x:1032,y:592.4},0).wait(1).to({scaleX:1.77,scaleY:1.87,rotation:43.6,x:1024.7,y:582.1},0).wait(1).to({scaleX:1.56,scaleY:1.69,rotation:32.9,x:1015.4,y:573.5},0).wait(1).to({scaleX:1.36,scaleY:1.52,rotation:22.2,x:1004.4,y:567.3},0).wait(1).to({scaleX:1.15,scaleY:1.34,rotation:11.6,x:992.4,y:563.2},0).wait(1).to({scaleX:0.94,scaleY:1.17,rotation:0.9,x:980,y:561},0).wait(1).to({regX:7.9,regY:8.5,rotation:0.8,x:979.4,y:560.5},0).wait(1).to({regX:8,regY:8.8,scaleX:0.97,scaleY:1.2,x:981.8,y:567.4},0).wait(1).to({scaleX:0.99,scaleY:1.23,x:984.3,y:574},0).wait(1).to({scaleX:1.01,scaleY:1.26,x:986.6,y:580.6},0).wait(1).to({scaleX:1.03,scaleY:1.29,x:989,y:587.1},0).wait(1).to({scaleX:1.05,scaleY:1.32,x:991.4,y:593.7},0).wait(1).to({scaleX:1.07,scaleY:1.35,x:993.8,y:600.3},0).wait(1).to({scaleX:1.09,scaleY:1.38,x:996.2,y:606.9},0).wait(1).to({scaleX:1.11,scaleY:1.41,x:998.6,y:613.5},0).wait(1).to({regY:8.7,y:613.2},0).wait(32));

	// Putumayo
	this.Putumayo = new lib.Putumayo();
	this.Putumayo.parent = this;
	this.Putumayo.setTransform(1203,259.3,1,1,0,0,0,50,26.5);
	this.Putumayo._off = true;
	new cjs.ButtonHelper(this.Putumayo, 0, 1, 2, false, new lib.Putumayo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Putumayo).wait(1).to({_off:false},0).wait(1).to({rotation:22.5,x:1225.9,y:281.6},0).wait(1).to({rotation:45,x:1248.4,y:304.3},0).wait(1).to({rotation:67.5,x:1270.6,y:327.4},0).wait(1).to({rotation:90,x:1292.5,y:350.7},0).wait(1).to({rotation:112.5,x:1314.1,y:374.4},0).wait(1).to({rotation:135,x:1335.4,y:398.3},0).wait(1).to({rotation:157.5,x:1356.4,y:422.5},0).wait(1).to({rotation:180,x:1377.1,y:447},0).wait(1).to({rotation:162,x:1397.5,y:471.7},0).wait(1).to({rotation:144,x:1417.5,y:496.7},0).wait(1).to({rotation:126,x:1437,y:522},0).wait(1).to({rotation:108,x:1456.1,y:547.8},0).wait(1).to({rotation:90,x:1474.6,y:574},0).wait(1).to({rotation:72,x:1492.3,y:600.7},0).wait(1).to({rotation:54,x:1508.8,y:628.2},0).wait(1).to({rotation:36,x:1523.7,y:656.6},0).wait(1).to({rotation:18,x:1535.6,y:686.5},0).wait(1).to({rotation:0,x:1539.8,y:718.3},0).wait(1).to({rotation:18,x:1522.6,y:742.2},0).wait(1).to({rotation:36,x:1492.6,y:753},0).wait(1).to({rotation:54,x:1460.7,y:757.4},0).wait(1).to({rotation:72,x:1428.5,y:758.6},0).wait(1).to({rotation:90,x:1396.4,y:758},0).wait(1).to({rotation:108,x:1364.4,y:756},0).wait(1).to({rotation:126,x:1332.4,y:753},0).wait(1).to({rotation:144,x:1300.5,y:749.3},0).wait(1).to({rotation:162,x:1268.8,y:744.9},0).wait(1).to({rotation:180,x:1237.1,y:740},0).wait(1).to({rotation:157.5,x:1205.5,y:734.5},0).wait(1).to({rotation:135,x:1174,y:728.6},0).wait(1).to({rotation:112.5,x:1142.6,y:722.2},0).wait(1).to({rotation:90,x:1111.3,y:715.4},0).wait(1).to({rotation:67.5,x:1080.1,y:708.2},0).wait(1).to({rotation:45,x:1049,y:700.5},0).wait(1).to({rotation:22.5,x:1018,y:692.3},0).wait(1).to({rotation:0,x:987.3,y:683.5},0).wait(2).to({scaleX:1.02,scaleY:1.03,x:989.9,y:693.3},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:992.4,y:703.1},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:995,y:712.9},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:997.6,y:722.7},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1000.1,y:732.5},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1002.7,y:742.3},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1005.3,y:752.1},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1007.8,y:761.9},0).wait(1).to({regY:26.6,x:1007.9,y:762.1},0).wait(32));

	// Nariño
	this.Narino = new lib.Nariño();
	this.Narino.parent = this;
	this.Narino.setTransform(576.7,887.5,1,1,0,0,0,35.5,34);
	this.Narino._off = true;
	new cjs.ButtonHelper(this.Narino, 0, 1, 2, false, new lib.Nariño(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Narino).wait(1).to({_off:false},0).wait(1).to({rotation:-14.7,x:610.1,y:862.4},0).wait(1).to({rotation:-29.4,x:643.5,y:837.3},0).wait(1).to({rotation:-44.1,x:677,y:812.3},0).wait(1).to({rotation:-58.8,x:710.3,y:787.2},0).wait(1).to({rotation:-73.6,x:743.8,y:762.1},0).wait(1).to({rotation:-88.3,x:777.2,y:737.1},0).wait(1).to({rotation:-103,x:810.7,y:712},0).wait(1).to({rotation:-117.7,x:844.1,y:687},0).wait(1).to({rotation:-91.5,x:877.5,y:661.9},0).wait(1).to({rotation:-65.3,x:910.9,y:636.9},0).wait(1).to({rotation:-39.2,x:944.4,y:611.9},0).wait(1).to({rotation:-13,x:977.8,y:586.9},0).wait(1).to({rotation:13.2,x:1011.3,y:561.8},0).wait(1).to({rotation:39.3,x:1044.8,y:536.8},0).wait(1).to({rotation:65.5,x:1078.2,y:511.8},0).wait(1).to({rotation:91.7,x:1111.7,y:486.8},0).wait(1).to({rotation:117.9,x:1145.2,y:461.8},0).wait(1).to({rotation:144,x:1178.7,y:436.8},0).wait(1).to({rotation:124.2,x:1212.2,y:411.9},0).wait(1).to({rotation:104.4,x:1245.7,y:387},0).wait(1).to({rotation:84.5,x:1279.3,y:362.1},0).wait(1).to({rotation:64.7,x:1313,y:337.3},0).wait(1).to({rotation:44.8,x:1337.8,y:320.4},0).wait(1).to({rotation:25,x:1305,y:346.2},0).wait(1).to({rotation:5.2,x:1271.9,y:371.7},0).wait(1).to({rotation:-14.7,x:1238.8,y:397.1},0).wait(1).to({rotation:-34.5,x:1205.7,y:422.5},0).wait(1).to({rotation:-54.3,x:1172.5,y:447.9},0).wait(1).to({rotation:-47.5,x:1139.3,y:473.3},0).wait(1).to({rotation:-40.6,x:1106.1,y:498.6},0).wait(1).to({rotation:-33.7,x:1072.8,y:524},0).wait(1).to({rotation:-26.8,x:1039.7,y:549.3},0).wait(1).to({rotation:-19.9,x:1006.4,y:574.6},0).wait(1).to({rotation:-13.1,x:973.2,y:599.9},0).wait(1).to({rotation:-6.2,x:939.9,y:625.2},0).wait(1).to({rotation:0.7,x:906.7,y:650.6},0).wait(1).to({regX:35.1,regY:33.8,rotation:0.5,x:906.6,y:650.3},0).wait(1).to({regX:35.5,regY:34,scaleX:1.02,scaleY:1.03,x:907.7,y:659.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:908.5,y:668.4},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:909.3,y:677.3},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:910.1,y:686.3},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:910.9,y:695.2},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:911.6,y:704.2},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:912.4,y:713.1},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:913.2,y:722},0).wait(1).to({regX:35.4,x:912.9,y:721.9},0).wait(32));

	// Amazonas
	this.Amazonas = new lib.Amazonas();
	this.Amazonas.parent = this;
	this.Amazonas.setTransform(347.4,359.7,1,1,0,0,0,77,53.5);
	this.Amazonas._off = true;
	new cjs.ButtonHelper(this.Amazonas, 0, 1, 2, false, new lib.Amazonas(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Amazonas).wait(1).to({_off:false},0).wait(1).to({rotation:17.5,x:377.9,y:352.7},0).wait(1).to({rotation:34.9,x:408.4,y:346.1},0).wait(1).to({rotation:52.4,x:439.1,y:339.8},0).wait(1).to({rotation:69.9,x:469.8,y:333.8},0).wait(1).to({rotation:87.3,x:500.7,y:328.2},0).wait(1).to({rotation:104.8,x:531.6,y:323},0).wait(1).to({rotation:122.3,x:562.5,y:318.3},0).wait(1).to({rotation:139.8,x:593.5,y:314},0).wait(1).to({rotation:115.8,x:624.6,y:310.2},0).wait(1).to({rotation:91.8,x:655.8,y:307},0).wait(1).to({rotation:67.8,x:687,y:304.5},0).wait(1).to({rotation:43.8,x:718.2,y:302.6},0).wait(1).to({rotation:19.8,x:749.5,y:301.6},0).wait(1).to({rotation:-4.2,x:780.8,y:301.4},0).wait(1).to({rotation:-28.2,x:812.2,y:302.3},0).wait(1).to({rotation:-52.2,x:843.4,y:304.2},0).wait(1).to({rotation:-76.2,x:874.5,y:307.6},0).wait(1).to({rotation:-100.2,x:905.5,y:312.5},0).wait(1).to({rotation:-82.9,x:936.1,y:319.1},0).wait(1).to({rotation:-65.5,x:966.1,y:327.9},0).wait(1).to({rotation:-48.1,x:995.3,y:339},0).wait(1).to({rotation:-30.7,x:1023.4,y:353},0).wait(1).to({rotation:-13.3,x:1049.6,y:370},0).wait(1).to({rotation:4.1,x:1073.4,y:390.4},0).wait(1).to({rotation:21.5,x:1094,y:413.9},0).wait(1).to({rotation:38.9,x:1110.9,y:440.3},0).wait(1).to({rotation:56.3,x:1123.7,y:468.8},0).wait(1).to({rotation:73.7,x:1132.6,y:498.8},0).wait(1).to({rotation:64.6,x:1137.9,y:529.7},0).wait(1).to({rotation:55.5,x:1140.2,y:560.9},0).wait(1).to({rotation:46.4,x:1139.8,y:592.2},0).wait(1).to({rotation:37.2,x:1137.2,y:623.4},0).wait(1).to({rotation:28.1,x:1132.7,y:654.4},0).wait(1).to({rotation:19,x:1126.7,y:685.1},0).wait(1).to({rotation:9.9,x:1119.2,y:715.5},0).wait(1).to({rotation:0.8,x:1110.7,y:745.7},0).wait(1).to({regX:76.5,regY:53.3,rotation:0.7},0).wait(1).to({regX:77,regY:53.5,scaleX:1.02,scaleY:1.03,rotation:0.8,x:1116.5,y:757.3},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1121.8,y:768.7},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1127.1,y:780.2},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1132.4,y:791.7},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1137.7,y:803.1},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1143.1,y:814.6},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1148.3,y:826},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1153.7,y:837.5},0).wait(1).to({regX:76.9,scaleY:1.21,rotation:0.7,x:1153.2,y:837.3},0).wait(32));

	// Meta
	this.Meta = new lib.Meta();
	this.Meta.parent = this;
	this.Meta.setTransform(846,306,1,1,0,0,0,62.1,50);
	this.Meta._off = true;
	new cjs.ButtonHelper(this.Meta, 0, 1, 2, false, new lib.Meta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Meta).wait(1).to({_off:false},0).wait(1).to({rotation:-22.1,x:827.1,y:329.6},0).wait(1).to({rotation:-44.2,x:808.4,y:353.2},0).wait(1).to({rotation:-66.4,x:789.8,y:377.1},0).wait(1).to({rotation:-88.5,x:771.4,y:401},0).wait(1).to({rotation:-110.6,x:753.1,y:425.1},0).wait(1).to({rotation:-132.7,x:735.1,y:449.3},0).wait(1).to({rotation:-154.9,x:717.3,y:473.8},0).wait(1).to({rotation:-177,x:699.8,y:498.3},0).wait(1).to({rotation:-167.6,x:682.5,y:523.2},0).wait(1).to({rotation:-158.2,x:665.7,y:548.3},0).wait(1).to({rotation:-148.8,x:649.4,y:573.7},0).wait(1).to({rotation:-139.4,x:633.6,y:599.5},0).wait(1).to({rotation:-130.1,x:618.6,y:625.7},0).wait(1).to({rotation:-120.7,x:604.5,y:652.5},0).wait(1).to({rotation:-111.3,x:592,y:680},0).wait(1).to({rotation:-101.9,x:581.7,y:708.3},0).wait(1).to({rotation:-92.5,x:575.9,y:737.9},0).wait(1).to({rotation:-83.2,x:580.4,y:767.5},0).wait(1).to({rotation:-61.6,x:603.1,y:786.1},0).wait(1).to({rotation:-40.1,x:633,y:789.3},0).wait(1).to({rotation:-18.5,x:662.9,y:785.6},0).wait(1).to({rotation:3.1,x:692.3,y:778.4},0).wait(1).to({rotation:24.6,x:721,y:769.2},0).wait(1).to({rotation:46.2,x:749.4,y:758.8},0).wait(1).to({rotation:67.7,x:777.4,y:747.3},0).wait(1).to({rotation:89.3,x:805,y:735.2},0).wait(1).to({rotation:110.8,x:832.4,y:722.5},0).wait(1).to({rotation:132.4,x:859.6,y:709.3},0).wait(1).to({rotation:116,x:886.6,y:695.8},0).wait(1).to({rotation:99.6,x:913.4,y:681.9},0).wait(1).to({rotation:83.3,x:940.1,y:667.7},0).wait(1).to({rotation:66.9,x:966.6,y:653.3},0).wait(1).to({rotation:50.5,x:993.1,y:638.7},0).wait(1).to({rotation:34.1,x:1019.4,y:623.9},0).wait(1).to({rotation:17.8,x:1045.7,y:608.9},0).wait(1).to({rotation:1.4,x:1071.8,y:593.7},0).wait(1).to({regX:61.8,regY:49.8,rotation:1.3,y:593.8},0).wait(1).to({regX:62.1,regY:50,scaleX:1.02,scaleY:1.03,x:1076.5,y:601.4},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1080.9,y:608.9},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1085.4,y:616.3},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1089.8,y:623.8},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1094.3,y:631.3},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1098.7,y:638.8},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1103.2,y:646.2},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1107.6,y:653.7},0).wait(1).to({regX:62,scaleX:1.18,x:1107.3,y:653.5},0).wait(32));

	// Guaviare
	this.Guaviare = new lib.Guaviare();
	this.Guaviare.parent = this;
	this.Guaviare.setTransform(596,749.4,1,1,0,0,0,57.5,32.8);
	this.Guaviare._off = true;
	new cjs.ButtonHelper(this.Guaviare, 0, 1, 2, false, new lib.Guaviare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Guaviare).wait(1).to({_off:false},0).wait(1).to({rotation:15,x:630.5,y:757.7},0).wait(1).to({rotation:30,x:665.2,y:765.9},0).wait(1).to({rotation:45,x:699.9,y:774},0).wait(1).to({rotation:60,x:734.6,y:782.1},0).wait(1).to({rotation:75,x:769.4,y:790.1},0).wait(1).to({rotation:90,x:804.1,y:798},0).wait(1).to({rotation:105,x:838.9,y:805.7},0).wait(1).to({rotation:120,x:873.7,y:813.4},0).wait(1).to({rotation:96,x:908.6,y:820.9},0).wait(1).to({rotation:72,x:943.3,y:828.3},0).wait(1).to({rotation:48,x:978.2,y:835.5},0).wait(1).to({rotation:24,x:1013.2,y:842.5},0).wait(1).to({rotation:0,x:1048.1,y:849.3},0).wait(1).to({rotation:-24,x:1083.2,y:855.9},0).wait(1).to({rotation:-48,x:1118.2,y:862.2},0).wait(1).to({rotation:-72,x:1153.3,y:868.2},0).wait(1).to({rotation:-96,x:1188.6,y:873.8},0).wait(1).to({rotation:-120,x:1223.8,y:879},0).wait(1).to({rotation:-104,x:1259.1,y:883.6},0).wait(1).to({rotation:-88,x:1294.6,y:887.4},0).wait(1).to({rotation:-71.9,x:1330.1,y:890.2},0).wait(1).to({rotation:-55.9,x:1365.7,y:891.2},0).wait(1).to({rotation:-39.9,x:1401.3,y:889.2},0).wait(1).to({rotation:-23.9,x:1434.9,y:878.6},0).wait(1).to({rotation:-7.9,x:1436.7,y:846.9},0).wait(1).to({rotation:8.1,x:1413,y:820.4},0).wait(1).to({rotation:24.2,x:1385.5,y:797.9},0).wait(1).to({rotation:40.2,x:1356.4,y:777.3},0).wait(1).to({rotation:35,x:1326.6,y:757.8},0).wait(1).to({rotation:29.9,x:1296.2,y:739.2},0).wait(1).to({rotation:24.8,x:1265.5,y:721.2},0).wait(1).to({rotation:19.6,x:1234.5,y:703.6},0).wait(1).to({rotation:14.5,x:1203.2,y:686.5},0).wait(1).to({rotation:9.4,x:1171.9,y:669.6},0).wait(1).to({rotation:4.2,x:1140.4,y:653},0).wait(1).to({rotation:-0.9,x:1108.6,y:636.6},0).wait(1).to({regX:57.3,regY:32.5,rotation:-0.8,x:1108.8,y:638.6},0).wait(1).to({regX:57.5,regY:32.8,scaleX:1.02,scaleY:1.03,x:1114.2,y:647.5},0).wait(1).to({scaleX:1.04,scaleY:1.05,x:1119.5,y:656.1},0).wait(1).to({scaleX:1.07,scaleY:1.08,x:1124.7,y:664.7},0).wait(1).to({scaleX:1.09,scaleY:1.11,x:1130,y:673.4},0).wait(1).to({scaleX:1.11,scaleY:1.13,x:1135.3,y:682},0).wait(1).to({scaleX:1.13,scaleY:1.16,x:1140.5,y:690.7},0).wait(1).to({scaleX:1.16,scaleY:1.18,x:1145.8,y:699.3},0).wait(1).to({scaleX:1.18,scaleY:1.21,x:1151.1,y:707.9},0).wait(1).to({regX:57.4,scaleY:1.21,x:1150.9,y:707.7},0).wait(32));

	// TextAni
	this.TextoClip = new lib.Símbolo2();
	this.TextoClip.parent = this;
	this.TextoClip.setTransform(78.8,229.4,0.132,0.115);
	this.TextoClip._off = true;

	this.timeline.addTween(cjs.Tween.get(this.TextoClip).wait(38).to({_off:false},0).wait(1).to({regX:191.7,regY:212,scaleX:0.24,scaleY:0.23,x:144.5,y:292.9},0).wait(1).to({scaleX:0.35,scaleY:0.34,x:184.9,y:332},0).wait(1).to({scaleX:0.46,scaleY:0.45,x:225.3,y:371},0).wait(1).to({scaleX:0.57,scaleY:0.56,x:265.7,y:410.1},0).wait(1).to({scaleX:0.68,scaleY:0.67,x:306.1,y:449.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:346.5,y:488.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:386.8,y:527.4},0).wait(1).to({scaleX:1,scaleY:1,x:427.3,y:566.5},0).to({_off:true},1).wait(32));

	// Texto
	this.text = new cjs.Text("DEPARTAMENTOS DE COLOMBIA", "66px 'Copperplate Gothic Bold'", "#996600");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.lineWidth = 1427;
	this.text.parent = this;
	this.text.setTransform(812.7,43.5);

	this.Colombia = new cjs.Text("\n La República de Colombia es un país\n soberano situado en la región\n noroccidental de América del Sur\n que se encuentra constituido en un\n estado unitario, social y democrático\n de derecho cuya forma de gobierno\n es presidencialista. Es una república\n que está organizada políticamente\n en 32 departamentos\n descentralizados y el Distrito capital\n de Bogotá, sede del gobierno\n nacional.", "bold 34px 'Times New Roman'");
	this.Colombia.name = "Colombia";
	this.Colombia.textAlign = "center";
	this.Colombia.lineHeight = 40;
	this.Colombia.lineWidth = 624;
	this.Colombia.parent = this;
	this.Colombia.setTransform(427.3,436.8,0.611,0.615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{scaleX:1,scaleY:1,x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",color:"#996600",lineHeight:75.45,lineWidth:1427}}]},38).to({state:[{t:this.Colombia,p:{scaleX:0.611,scaleY:0.615,y:436.8,text:"\n La República de Colombia es un país\n soberano situado en la región\n noroccidental de América del Sur\n que se encuentra constituido en un\n estado unitario, social y democrático\n de derecho cuya forma de gobierno\n es presidencialista. Es una república\n que está organizada políticamente\n en 32 departamentos\n descentralizados y el Distrito capital\n de Bogotá, sede del gobierno\n nacional.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.653,scaleY:0.615,x:427.3,y:365.5,text:"COLOMBIA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},9).to({state:[{t:this.Colombia,p:{scaleX:0.622,scaleY:0.656,y:447.3,text:"\nEl Departamento del Amazonas está situado en la parte sur del país a los 00º07’08’’de latitud Norte y los 04º13’19’’ latitud Sur y los 69º39’41’’ y 74º23’21’’ de longitud Oeste. Cuenta con una superficie de 109.665 km2 lo que representa el 9.6 % del territorio nacional y 27.2 % de la Amazonía colombiana. Limita por el Norte con el departamento de Caquetá y el río Apoporis, que lo separa del departamento del Vaupés; por el Este con la República de Brasil; por el Sur con los ríos Putumayo y Amazonas, que lo separa de la República del Perú y por el Oeste con la República del Perú, República de Ecuador y el departamento del Putumayo.",font:"bold 29px 'Times New Roman'",lineHeight:34.1,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.665,scaleY:0.656,x:427.3,y:360.2,text:"AMAZONAS",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.622,scaleY:0.638,y:442.8,text:"\nEl Departamento de Antioquia está situado al noreste del país, localizado entre los 05º26’20’’ y 08º52’23’’ de latitud Norte, y los 73º53’11’’ y 77º07’16’’ de longitud Oeste. Cuenta con una superficie de 63.612 km2 lo que representa el 5.6 % del territorio nacional. Limita por el Norte con el mar Caribe y los departamentos de Córdoba (franja de territorio en litigio) y Bolívar; por el Este con Bolívar, Santander y Boyacá; por el Sur con Caldas y Risaralda y por el Oeste con el departamento del Chocó.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.665,scaleY:0.638,x:427.3,y:367.8,text:"ANTIOQUÍA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.666,scaleY:0.679,y:457.3,text:"El Departamento del Arauca, se encuentra situado en el extremo nordeste del territorio nacional, en el norte de la región de la Orinoquía colombiana, localizado entre los 06º 02` 40\" y 07º 06` 13\" de latitud norte y los 69º 25` 54\" y 72º 22` 23\" de longitud oeste. Cuenta con una superficie de 23.818 km2 lo que representa el 2.1 % del territorio nacional. Limita por el Norte con el río Arauca que lo separa de la República de Venezuela, por el Este con la República de Venezuela, por el Sur con los ríos Meta y Casanare, que lo separan del departamento del Vichada y Casanare, y por el Oeste con el departamento de Boyacá.",font:"bold 30px 'Times New Roman'",lineHeight:35.25,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.712,scaleY:0.679,x:427.3,y:360.2,text:"ARAUCA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.649,scaleY:0.609,y:468.5,text:"El Departamento del Atlántico está situado en el norte del territorio nacional, en la región Caribe; localizado entre los 10º15’36’’ y 11º 06’37’’ de latitud norte, y 74º42’47’’ y 75º16’34’’ de longitud oeste. Cuenta con una superficie de 3.386 km2 lo que representa el 0.29 % del territorio nacional. Limita por el norte y noreste con el mar Caribe, en una extensión aproximada de 90 Km; desde el rompeolas occidental en Bocas de Ceniza, hasta las salinas de Galerazamba. Al este, con el río Magdalena, en una longitud de 105 Km, contados desde su desembocadura en Bocas de Ceniza hasta el desprendimiento del Canal del Dique en Calamar; al sur, suroeste y oeste con el departamento de Bolívar desde Calamar hasta las Salinas de Galerazamba. ",font:"bold 28px 'Times New Roman'",lineHeight:33,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.694,scaleY:0.609,x:422.3,y:365.7,text:"ATLÁNTICO",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:452}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.629,scaleY:0.612,y:447.7,text:"\nEl Departamento de Bolívar está situado en el norte del país, en la región de la llanura del Caribe, localizado entre los 07º00’03’’ y los 10º48’37’’ de latitud norte y entre los 73º45’15’’ y los 75º42’18’’ de longitud oeste. Cuenta con una superficie de 25.978 km2 lo que representa el 2.28 % del territorio nacional. Limita por el por el Norte con el mar Caribe y el departamento del Atlántico, por el Este con el río Magdalena que lo separa de los departamentos del Magdalena, Cesar y Santander, por el Sur con los departamentos de Santander y Antioquia, y por el Oeste con Antioquia, Córdoba, Sucre y el mar Caribe.",font:"bold 30px 'Times New Roman'",lineHeight:35.25,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.672,scaleY:0.612,x:427.3,y:360.1,text:"BOLÍVAR",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.61,scaleY:0.59,y:473.5,text:"El Departamento de Boyacá está situado en el centro del país, en la cordillera oriental de los Andes; localizado entre los 04º39’10’’ y los 07º03’17’’ de latitud norte y los 71º57’49’’ y los 74º41’35’’ de longitud oeste. Cuenta con una superficie de 23.189 km2 lo que representa el 2.03 % del territorio nacional. Limita por el Norte con los departamentos de Santander y Norte de Santander, por el Este con los departamentos de Arauca y Casanare, por el Sur con Meta y Cundinamarca, y por el Oeste con Cundinamarca y Antioquia.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.7,lineWidth:624}},{t:this.text,p:{scaleX:0.652,scaleY:0.59,x:427.7,y:365.8,text:"BOYACÁ",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.624,scaleY:0.614,y:450.7,text:"\nEl Departamento de Caldas está situado en el centro occidente de la región andina, localizado entre los 05º46’51’’ y los 04º48’20’’ de latitud norte, y los 74º38’01’’ y 75º55’45’’ de longitud oeste. Cuenta con una superficie de 7.888 km2 lo que representa el 0.69 % del territorio nacional. Limita por el Norte con el departamento de Antioquia, por el Este con el departamento de Cundinamarca, por el Sur con los departamentos del Tolima y Risaralda, y por el Oeste con el departamento de Risaralda.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.667,scaleY:0.614,x:427.4,y:367.7,text:"CALDAS",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.622,scaleY:0.638,y:455,text:"\nEl Departamento de Caquetá está situado en el noroeste de la región de la Amazonia; localizado entre los 00º42’17’’ de latitud sur y 02º04’13’’ de latitud norte y los 74º18’39’’ y 79º19’35’’ de longitud oeste.  Cuenta con una superficie de 88.965 km2 lo que representa el 7.79 % del territorio nacional. Limita por el Norte con los departamentos del Huila y Meta, por el Este con los departamentos del Guaviare y Vaupés, por el Sur con el río Caquetá que lo separa de los departamentos del Amazonas y Putumayo, y por el Oeste con los departamentos del Cauca y Huila.",font:"bold 32px 'Times New Roman'",lineHeight:37.4,x:425.3,lineWidth:624}},{t:this.text,p:{scaleX:0.665,scaleY:0.638,x:425.3,y:367.8,text:"CAQUETÁ",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.588,scaleY:0.593,y:457.9,text:"\nEl Departamento del Casanare está situado en el oriente del país la región de la Orinoquía, localizado entre los 04º17’25’’ y 06º20’45’ de latitud norte y los 69º50’22’’ y 73º04’33’’ de longitud oeste. Cuenta con una superficie de 44.640 km2 lo que representa el 3.91 % del territorio nacional. Limita por el Norte con el río Casanare, que lo separa del departamento de Arauca; por el Este con el río Meta que lo separa del departamento de Vichada; por el Sur con los ríos Upía y Meta, el último de los cuales los separa del departamento del Meta, y por el Oeste con los departamentos de Boyacá y Cundinamarca.",font:"bold 32px 'Times New Roman'",lineHeight:37.4,x:430.3,lineWidth:664}},{t:this.text,p:{scaleX:0.629,scaleY:0.593,x:428.4,y:367.7,text:"CASANARE",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.629,scaleY:0.609,y:442.8,text:"\nEl Departamento de Cauca está situado en el suroeste del país entre las regiones andina y pacífica; localizado entre los 00º58’54’’ y 03º19’04’’ de latitud norte y los 75º47’36’’ y 77º57’05’’ de longitud oeste. Cuenta con una superficie de 29.308 km2 lo que representa el 2.56 % del territorio nacional. Limita por el Norte con el departamento del Valle del Cauca, por el Este con los departamentos de Tolima, Huila y Caquetá, por el Sur con Nariño y Putumayo y por el Oeste con el océano Pacífico.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.672,scaleY:0.609,x:427.3,y:360.1,text:"CAUCA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.622,scaleY:0.63,y:444.5,text:"\nEl Departamento del Cesar está situado en el norte del país, en la llanura del Caribe; localizado entre los 07º41’16’’ y 10º52’14’’ de latitud norte y los 72º53’27’’ y 74º08’28’’ de longitud oeste. Cuenta con una superficie de 22.925 km2 lo que representa el 2.0 % del territorio nacional. Limita por el Norte con los departamentos de Magdalena y La Guajira, por el Este con la República de Venezuela y el departamento de Norte de Santander, por el Sur con los departamentos de Norte de Santander y Santander, y por el Oeste con los departamentos de Bolívar y Magdalena.",font:"bold 32px 'Times New Roman'",lineHeight:37.4,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.665,scaleY:0.63,x:427.3,y:361.1,text:"CESAR",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.599,scaleY:0.632,y:458.3,text:"\nEl Departamento de Chocó está situado en el occidente del país, en la región de la llanura del Pacífico; localizado entre los 04º00’50’’ y 08º41’32’’ de latitud norte y los 76º02’57’’ y 77º53’38’’ de longitud oeste. Cuenta con una superficie de 46.530 km2 lo que representa el 4.0 % del territorio nacional. Limita por el Norte con la República de Panamá y el mar Caribe, por el Este con los departamentos de Antioquia, Risaralda y Valle del Cauca, por el Sur con el departamento del Valle de Cauca, y por el Oeste con el océano Pacífico.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.4,lineWidth:662}},{t:this.text,p:{scaleX:0.64,scaleY:0.632,x:427.3,y:367.7,text:"CHOCÓ",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.604,scaleY:0.628,y:442.7,text:"\nEl Departamento de Córdoba situado en el norte del país, en la región de la llanura del Caribe; localizado entre los 09º26’16’’ y 07º22’05’’ de latitud norte, y los 74º47’43’’ y 76º30’01’’ de longitud oeste. Cuenta con una superficie de 23.980 km2 lo que representa el 2.1 % del territorio nacional. Limita por el Norte con el mar Caribe y el departamento de Sucre, por el Este con los departamentos de Sucre, Bolívar y Antioquia; por el Sur con el departamento de Antioquia y por el Oeste con el departamento de Antioquia y el mar Caribe.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:428.7,lineWidth:660}},{t:this.text,p:{scaleX:0.645,scaleY:0.628,x:428,y:360.1,text:"CORDOBA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.584,scaleY:0.649,y:433.9,text:"\nEl Departamento de Cundinamarca está situado en la parte central del país, localizado entre los 03º40’14’’ y 05º50’11’’ de latitud norte y los 73º03’08’’ y 74º53’35’’ de longitud oeste. Cuenta con una superficie de 24.210 km2 lo que representa el 2.12 % del territorio nacional. Limita por el Norte con el departamento de Boyacá; por el Este con los departamentos de Boyacá y Meta; por el Sur con los departamentos de Meta, Huila y Tolima, y por el Oeste con el río Magdalena, que lo separa de los departamentos de Tolima y Caldas.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:422.3,lineWidth:653}},{t:this.text,p:{scaleX:0.624,scaleY:0.649,x:433,y:366.3,text:"CUNDINAMARCA",font:"bold 61px 'Times New Roman'",color:"#000000",lineHeight:69.55,lineWidth:645}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.579,scaleY:0.625,y:433.6,text:"\nEl Departamento de Guainía está situado al oriente del país, en la región de la Amazonía, localizado entre los 01º10’17’’ y 04º02’21’’ de latitud norte, y los 66º50’44’’ y 70º55’16’’ de longitud oeste. Cuenta con una superficie de 70.691 km2 lo que representa el 6.2 % del territorio nacional. Limita por el Norte con el río Guainía, que lo separa del departamento del Vichada; por el Este con los río Atabapo, Guainía y Negro, que lo separan de la República de Venezuela; por el Sur con la República de Brasil y por el Oeste con los departamentos del Vaupés, Guaviare y Vichada.",font:"bold 33px 'Times New Roman'",lineHeight:38.55,x:424.2,lineWidth:668}},{t:this.text,p:{scaleX:0.618,scaleY:0.625,x:426.1,y:361.7,text:"GUAINÍA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.6,scaleY:0.626,y:437.6,text:"\nEl Departamento de La Guajira está situado en el extremo norte del país y de la llanura del Caribe, en la parte más septentrional de la América del sur; localizado entre los 10º23’ y 12º28’ de latitud norte y los 71º06’ y 73º39’ de longitud oeste. Cuenta con una superficie de 20.848 km2 lo que representa el 1.8 % del territorio nacional. Limita por el Norte con el mar Caribe, por el Este con el mar Caribe y la República de Venezuela, por el Sur con el departamento del Cesar, y por el Oeste con el departamento del Magdalena y el mar Caribe.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:429.3,lineWidth:653}},{t:this.text,p:{scaleX:0.642,scaleY:0.626,x:428,y:367.7,text:"GUAJIRA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.622,scaleY:0.667,y:437.7,text:"\nEl Departamento de Guaviare está situado en la parte oriental del país, en la región de la Amazonía, localizado entre los 00º39’21’’ y 02º55’33’’ de latitud norte y entre los 69º59’45’’ y 73º39’48’’ de longitud oeste. Cuenta con una superficie de 42.327 km2 lo que representa el 3.7 % del territorio. Limita por el Norte con los departamentos de Meta y Vichada, por el Este con Guainía y Vaupés, por el Sur con Caquetá y Vaupés, y por el Oeste con Meta y Caquetá.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.665,scaleY:0.597,x:427.3,y:367.7,text:"GUAVIARE",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.629,scaleY:0.712,y:437.9,text:"\nEl Departamento de Huila está situado en la parte sur de la región andina; localizado entre los 01º33’08’’ y 03º47’32’’ de latitud norte y los 74º28’34’’ y 76º36’47’’ de longitud oeste. Cuenta con una superficie de 19.890 km2 lo que representa el 1.75 % del territorio nacional. Limita por el Norte con los departamentos del Tolima y Cundinamarca, por el Este con Meta y Caquetá, por el Sur con Caquetá y Cauca, y por el Oeste con Cauca y Tolima.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.672,scaleY:0.712,x:427.3,y:360.3,text:"HUILA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.616,scaleY:0.626,y:441.7,text:"\nEl Departamento del Magdalena está situado en el norte del país, en la región de la llanura del Caribe; localizado entre los 08º56’21’’ y 02º18’24’’ de latitud norte y a los 73º32’59’’ y 74º55’51’’ de longitud oeste.  Cuenta con una superficie de 23.188 km2 lo que representa el 2.0 % del territorio nacional. Limita por el Norte con el mar Caribe, por el Este con los departamentos de La Guajira y Cesar, por el Sur y Oeste con el río Magdalena, que lo separa de los departamentos de Bolívar y Atlántico.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.658,scaleY:0.626,x:429.4,y:360.1,text:"MAGDALENA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:482}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.641,scaleY:0.629,y:438,text:"\nEl Departamento del Meta está situado en la parte central del país, en la región de la Orinoquia, localizado entre los 04º54’25’’ y los 01º36’52’’ de latitud norte, y los 71º4’38’’ y 74º53’57’’ de longitud oeste.  Cuenta con una superficie de 85.635 km2 lo que representa el 7.5% del territorio nacional. Limita por el Norte con el departamento de Cundinamarca y los ríos Upía y Meta que lo separan del departamento del Casanare; por el Este con Vichada, por el Sur con el departamento del Caquetá y el río Guaviare que lo separa del departamento de Guaviare; y por el Oeste con los departamentos de Huila y Cundinamarca.",font:"bold 31px 'Times New Roman'",lineHeight:36.3,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.685,scaleY:0.629,x:427.3,y:362.4,text:"META",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.616,scaleY:0.628,y:442.3,text:"\nEl Departamento de Nariño está situado en el extremo suroeste del país, en la frontera con la República del Ecuador; localizado entre los 00º31’08’’ y 02º41’08’’ de latitud norte, y los 76º51’19’’ y 79º01’34’’ de longitud oeste. Cuenta con una superficie de 33.268 km2 lo que representa el 2.9 % del territorio. Limita por el Norte con el departamento del Cauca, por el Este con el departamento del Putumayo, por el Sur con la República del Ecuador y por el Oeste con el océano Pacífico.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.658,scaleY:0.628,x:427.3,y:366.8,text:"NARIÑO",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.666,scaleY:0.688,y:437.6,text:"\nEl Departamento de Norte de Santander está situado en el noreste de la región andina del país; localizado entre los 06º56’42’ y 09º18’01’’ de latitud norte y los 72º01’13’’ y 73º38’25’’ de longitud oeste. Cuenta con una superficie de 22.367 km2 lo que representa el 1.9% del territorio nacional. Limita por el Norte y Este con la República de Venezuela, por el Sur con los departamentos de Boyacá y Santander, y por el Oeste con los departamentos de Santander y Cesar.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.506,scaleY:0.688,x:422.6,y:369.5,text:"NORTE DE SANTANDER",font:"bold 48px 'Times New Roman'",color:"#000000",lineHeight:55.15,lineWidth:570}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.574,scaleY:0.646,y:436.8,text:"\nEl Departamento de Putumayo está situado en el sur del país, en la región de la Amazonía, localizado entre 01º26’18’’ y 00º27’37’’ de latitud norte, y 73º50’39’ y 77º4’58’’ de longitud oeste. Cuenta con una superficie de 25.648 km2 lo que representa el 2.2 % del territorio nacional. Limita por el Norte con los departamentos de Nariño, Cauca y el río Caquetá que lo separa del departamento de Caquetá, por el Este con el departamento del Caquetá, por el Sur con el departamento del Amazonas y los ríos Putumayo y San Miguel que lo separan de las repúblicas de Perú y Ecuador, y por el Oeste con el departamento del Nariño.",font:"bold 31px 'Times New Roman'",lineHeight:36.3,x:428.6,lineWidth:659}},{t:this.text,p:{scaleX:0.613,scaleY:0.646,x:424.2,y:366,text:"PUTUMAYO",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.588,scaleY:0.609,y:447.4,text:"\nEl Departamento de Quindío está ubicado en la parte centro - occidental del país, localizado entre los 04º04’41’’ y 04º43’18’’ de latitud norte y entre los 75º23’41’’ y 75º53’56’’ de longitud oeste. Cuenta con una superficie de 1.845 km2 lo que representa el 0.16% del territorio nacional. Limita por el Norte con los departamentos del Valle del Cauca y Risaralda, por el Este con el departamento del Tolima, por el Sur con los departamentos de Tolima y Valle del Cauca y por el Oeste con el departamento del Valle del Cauca.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:429.5,lineWidth:653}},{t:this.text,p:{scaleX:0.629,scaleY:0.609,x:425.6,y:366.1,text:"QUINDIO",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.616,scaleY:0.609,y:444.3,text:"\nEl Departamento de Risaralda está situado en el centro occidente de la región andina; localizado entre los 05º30’00’’ y 04º41’36’’ de latitud norte, y entre los 75º23’49’’ y 76º18’27’’ de longitud oeste. Cuenta con una superficie de 4.140 km2 lo que representa el 0.36 % del territorio nacional. Limita por el Norte con los departamentos de Antioquia y Caldas, por el Este con Caldas y Tolima, por el Sur con los departamentos de Quindío y Valle del Cauca y por el Oeste con el departamento de Chocó.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.658,scaleY:0.609,x:427.3,y:365.3,text:"RISARALDA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.628,scaleY:0.647,y:449.6,text:"\nEl Departamento de Santander está situado al noreste del país en la región andina, entre los 05º42’34’’ y 08º07’58’’ de latitud norte, y los 72º26’ y 74º32’ de longitud oeste. Cuenta con una superficie de 30.537 km2 lo que representa el 2.7 % del territorio. Limita por el Norte con los departamentos de Cesar y Norte de Santander, por el Este y por el Sur con el departamento de Boyacá y por el Oeste con el río Magdalena que lo separa de los departamentos de Antioquia y Bolívar.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.672,scaleY:0.647,x:424.6,y:364.1,text:"SANTANDER",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:562}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.629,scaleY:0.64,y:453.4,text:"\nEl Departamento de Sucre está situado en el norte del país, en la región de la llanura del Caribe; localizado entre los 10º08’03’’ y 08º16’46’’ de latitud norte y los 74º32’35’’ y 75º42’25’’ de longitud oeste. Cuenta con una superficie de 10.670 km2 lo que representa el 0.9 % del territorio nacional. Limita por el Norte y Este con el departamento de Bolívar, por el Sur con los departamentos de Córdoba y Bolívar, y por el Oeste con el departamento de Córdoba y el mar Caribe.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.672,scaleY:0.64,x:427.3,y:367.8,text:"SUCRE",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.616,scaleY:0.643,y:451.6,text:"\nEl Departamento de Tolima está situado en el centro del país, localizado entre los 02º52’59’’ y 05º19’59’’ latitud norte, y los 74º24’18’’ y 76º06’23’’ longitud oeste. Cuenta con una superficie de 23.582 km2 lo que representa el 2.1 % del territorio nacional. Limita por el Norte con el departamento de Caldas, por el Este con el departamento Cundinamarca, por el Sur con los departamentos de Huila y Cauca y por el Oeste con los departamentos de Quindío, Risaralda y Valle del Cauca.",font:"bold 34px 'Times New Roman'",lineHeight:39.65,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.658,scaleY:0.643,x:427.3,y:367.8,text:"TOLIMA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.599,scaleY:0.626,y:447.4,text:"\nEl Departamento del Valle del Cauca está situado al suroccidente del país, formando parte de las regiones andina y pacífica; localizado entre los 05º02’08’’ y 03º04’02’’ de latitud norte y a los 72º42’27’’ y 74º27’13’’ de longitud oeste. Cuenta con una superficie de 22.140 km2 lo que representa el 1.9 % del territorio nacional. Limita por el Norte con los departamentos de Chocó, Caldas y Quindío; por el Este con los departamentos del Quindío y Tolima, por el Sur con el departamento del Cauca y por el Oeste con el océano Pacífico y el departamento del Chocó.",font:"bold 33px 'Times New Roman'",lineHeight:38.55,x:428.4,lineWidth:651}},{t:this.text,p:{scaleX:0.64,scaleY:0.626,x:427.7,y:368.2,text:"VALLE",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.647,scaleY:0.604,y:451.1,text:"\nEl Departamento de Vaupés está ubicado al oriente del país en la región de la Amazonía, comprendido entre los 01º13’28’’ de latitud sur y 02º04’55’’ de latitud norte, y entre los 69º06’50’’ y 72º02’15’’ de longitud oeste. Cuenta con una superficie de 53.190 km2 lo que representa el 4.6 % del territorio nacional. Limita por el Norte con los departamentos de Guaviare y Guainía, por el Este con la República de Brasil, por el Sur con el río Apoporis que lo separa de los departamentos de Amazonas y Caquetá y por el Oeste con los departamentos de Caquetá y Guaviare.",font:"bold 32px 'Times New Roman'",lineHeight:37.4,x:427.3,lineWidth:624}},{t:this.text,p:{scaleX:0.692,scaleY:0.604,x:427.3,y:364,text:"VAUPÉS",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).to({state:[{t:this.Colombia,p:{scaleX:0.566,scaleY:0.594,y:454.4,text:"\nEl Departamento de Vichada está situado en el extremo oriental del país y de la región de la Orinoquía colombiana, localizado entre los 06º19’34’’ y 02º53’58’’ de latitud norte y 67º25’1’’ y 71º7’10’’ de longitud oeste. Cuenta con una superficie de 98.970 km2 lo que representa el 8.6 % del territorio nacional. Limita por el Norte con el río Meta que lo separa de los departamentos de Casanare, Arauca y la República de Venezuela; por el Este con el río Orinoco que lo separa de la República de Venezuela, por el Sur con el río Guaviare que lo separa de los departamentos de Guainía y Guaviare y por el Oeste con los departamentos de Meta y Casanare.",font:"bold 31px 'Times New Roman'",lineHeight:36.3,x:426,lineWidth:688}},{t:this.text,p:{scaleX:0.605,scaleY:0.594,x:426.8,y:367.7,text:"VICHADA",font:"bold 72px 'Times New Roman'",color:"#000000",lineHeight:81.7,lineWidth:432}}]},1).wait(1));

	// Menu
	this.text_1 = new cjs.Text("Autor: Johnnatan Ruiz", "bold 72px 'Times New Roman'", "#996600");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 82;
	this.text_1.lineWidth = 932;
	this.text_1.parent = this;
	this.text_1.setTransform(1129.3,902.9);

	this.text_2 = new cjs.Text("Bienvenidos a la página con información de los departamentos de Colombia.", "bold 72px 'Times New Roman'", "#996600");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 82;
	this.text_2.lineWidth = 1124;
	this.text_2.parent = this;
	this.text_2.setTransform(794.4,429.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.9,1,1).p("Eh8jgD+MD5HAAAIAAH9Mj5HAAAg");
	this.shape.setTransform(799.9,179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("Eh8iAD/IAAn9MD5FAAAIAAH9g");
	this.shape_1.setTransform(799.9,179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAAAAIAAAAIABAAg");
	this.shape_2.setTransform(381.1,287);

	this.PlayB = new lib.PlayB();
	this.PlayB.parent = this;
	this.PlayB.setTransform(1519.9,78.1,1,1,0,0,0,40.9,40.9);
	new cjs.ButtonHelper(this.PlayB, 0, 1, 2, false, new lib.PlayB(), 3);

	this.TabletClip = new lib.Símbolo1();
	this.TabletClip.parent = this;
	this.TabletClip.setTransform(200.7,287,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2,p:{x:794.4,y:429.6,text:"Bienvenidos a la página con información de los departamentos de Colombia.",font:"bold 72px 'Times New Roman'",lineHeight:81.7,lineWidth:1124}},{t:this.text_1,p:{x:1129.3,y:902.9,text:"Autor: Johnnatan Ruiz",font:"bold 72px 'Times New Roman'",lineHeight:81.7,lineWidth:932}}]}).to({state:[{t:this.shape_2},{t:this.text_1,p:{x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",lineHeight:75.45,lineWidth:1427}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_2,p:{x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",lineHeight:75.45,lineWidth:1427}},{t:this.text_1,p:{x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",lineHeight:75.45,lineWidth:1427}},{t:this.PlayB}]},37).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_2,p:{x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",lineHeight:75.45,lineWidth:1427}},{t:this.text_1,p:{x:812.7,y:43.5,text:"DEPARTAMENTOS DE COLOMBIA",font:"66px 'Copperplate Gothic Bold'",lineHeight:75.45,lineWidth:1427}},{t:this.PlayB},{t:this.TabletClip}]},9).wait(32));

	// Botones
	this.Inicio = new lib.Inicio();
	this.Inicio.parent = this;
	this.Inicio.setTransform(778.1,234.2,1,1,0,0,0,295.9,126.1);
	new cjs.ButtonHelper(this.Inicio, 0, 1, 2, false, new lib.Inicio(), 3);

	this.TabletClip_1 = new lib.Símbolo1();
	this.TabletClip_1.parent = this;
	this.TabletClip_1.setTransform(78.8,220.1,0.111,0.115);
	this.TabletClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Inicio}]}).to({state:[]},1).to({state:[{t:this.TabletClip_1}]},37).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[{t:this.TabletClip_1}]},1).to({state:[]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.TabletClip_1).wait(38).to({_off:false},0).wait(1).to({regX:228,regY:301.5,scaleX:0.22,scaleY:0.23,x:144.7,y:296.5},0).wait(1).to({scaleX:0.33,scaleY:0.34,x:185.2,y:338.2},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:225.8,y:379.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:266.4,y:421.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:306.9,y:463.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:347.5,y:505},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:388,y:546.7},0).wait(1).to({scaleX:1,scaleY:1,x:428.7,y:588.5},0).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1029.2,568.9,1366.4,918.2);
// library properties:
lib.properties = {
	width: 1597,
	height: 1005,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;