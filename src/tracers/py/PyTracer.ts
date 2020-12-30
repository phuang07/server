import { LambdaTracerPython } from 'tracers/LambdaTracerPython';

export class PyTracer extends LambdaTracerPython {
  constructor() {
    super('py');
  }
}
