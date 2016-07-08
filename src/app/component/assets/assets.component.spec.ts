/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AssetsComponent } from './assets.component';

describe('Component: assets', () => {
  it('should create an instance', () => {
    let component = new AssetsComponent();
    expect(component).toBeTruthy();
  });
});
