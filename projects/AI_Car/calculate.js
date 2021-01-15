var inputs = [];
function calculate() {
  inputs = [frontLeftDist, frontRightDist, leftHolder[frameLag - 1], rightHolder[frameLag - 1], frontDist];
  let numInputs = 5;
  let numOutputs = 3;
  let numPerceptrons = 14;
  let perceptrons = [];
  for (let i = 0; i < numPerceptrons; i++) {
    perceptrons[i] = 0;
  }
  for (let i = 0; i < numInputs; i++) {
    inputs[i] = constrain(inputs[i], 0, 500);

    perceptrons[i] = inputs[i]/200;
  }
  perceptrons[0] = (perceptrons[0]);
  perceptrons[1] = (perceptrons[1]);
  perceptrons[2] = (perceptrons[2]);
  perceptrons[3] = (perceptrons[3]);
  perceptrons[4] = (perceptrons[4]);
  perceptrons[5] += perceptrons[2] * -0.6947978;
  perceptrons[5] += perceptrons[4] * -0.45670247;
  perceptrons[5] = sigmoid(perceptrons[5]);
  perceptrons[6] += perceptrons[1] * -0.54401755;
  perceptrons[6] += perceptrons[0] * 0.19425872;
  perceptrons[6] += perceptrons[9] * 0.07707866;
  perceptrons[6] += perceptrons[13] * -0.3080682;
  perceptrons[6] = sigmoid(perceptrons[6]);
  perceptrons[7] += perceptrons[0] * -0.111167826;
  perceptrons[7] += perceptrons[10] * 0.58822685;
  perceptrons[7] = sigmoid(perceptrons[7]);
  perceptrons[8] = sigmoid(perceptrons[8]);
  perceptrons[9] += perceptrons[1] * 0.6556591;
  perceptrons[9] += perceptrons[8] * -0.049089383;
  perceptrons[9] += perceptrons[10] * -0.61144245;
  perceptrons[9] += perceptrons[11] * 0.8793509;
  perceptrons[9] += perceptrons[12] * 0.92250377;
  perceptrons[9] += perceptrons[0] * -0.82513326;
  perceptrons[9] = sigmoid(perceptrons[9]);
  perceptrons[10] += perceptrons[1] * 0.35591397;
  perceptrons[10] += perceptrons[8] * -0.09591173;
  perceptrons[10] += perceptrons[2] * 0.921492;
  perceptrons[10] += perceptrons[0] * -0.31149864;
  perceptrons[10] = sigmoid(perceptrons[10]);
  perceptrons[11] += perceptrons[1] * 0.35195875;
  perceptrons[11] += perceptrons[8] * 0.02049125;
  perceptrons[11] = sigmoid(perceptrons[11]);
  perceptrons[12] += perceptrons[1] * -0.84804523;
  perceptrons[12] += perceptrons[8] * 0.6272725;
  perceptrons[12] = sigmoid(perceptrons[12]);
  // perceptrons[12] *= 2;
  perceptrons[13] += perceptrons[0] * 1.0;
  perceptrons[13] += perceptrons[8] * 0.4539831;
  perceptrons[13] = sigmoid(perceptrons[13]);
  perceptrons[13] /= 2;

  let outputs = [];
  for (let i = numOutputs; i > 0; i--) {
    outputs[numOutputs - i] = perceptrons[perceptrons.length - i];
  }
  // console.log(outputs);

  return outputs;
}

function sigmoid(xFun) {
  let yFun = 1 / (1 + pow(2.7182818, -4.9 * xFun));
  return yFun;
}
