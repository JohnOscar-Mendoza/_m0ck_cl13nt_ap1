"use strict";
const assert = require('assert');
var { expect } = require('chai');
var layouts = require('../modules/layouts');
var Promise = require('promise');
// var sinon = require('sinon');

describe('Getting Grid', function() {

	describe('get all native', function() {

		it('Response status code should be 200', function() {

			layouts.get(function(err, body, status) {
				assert.equal(status, 200);
			} );

		} );
		

	} );

	describe('Get All with promises', function() {

		it('W/ Promise: Response status code should be 200', function() {

			return new Promise(	function(resolve, reject) {

				layouts.get(function(err, body, status) {
					console.log(res);
					resolve(status);

				} );
			} )
			.then ( function(res) {

				expect(res).to.equal(400);

			} )
			.done();
		} );

	} );

} );
