#pragma strict

import Livity.Features.LiveCoding;

var points: ParticleSystem.Particle[];

// 
// Largely inspired by http://catlikecoding.com/unity/tutorials/graphs/
// Check it out!
//
@Live function Update() {
	var t = Time.time;
	var resolution = 60;
	var gridResolution = resolution * resolution;
	if (points == null || points.Length != gridResolution) {
		points = new ParticleSystem.Particle[gridResolution];
	}
	var increment = 1f / (resolution - 1);
	var gridIndex = 0;
	for (var i = 0; i < resolution; ++i) {
		for (var j = 0; j < resolution; ++j) {
			var x = increment * i;
			var z = increment * j;
			var y = 0;
			var p = new ParticleSystem.Particle();
			p.position = Vector3(x, y, z);
			p.color = Color(x, 0, z);
			p.size = .1;
			points[gridIndex++] = p;
		}
	}
	particleSystem.SetParticles(points, points.Length);
}