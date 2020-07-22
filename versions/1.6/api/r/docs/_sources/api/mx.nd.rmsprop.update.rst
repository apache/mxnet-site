

``mx.nd.rmsprop.update``
================================================

Description
----------------------

Update function for `RMSProp` optimizer.

`RMSprop` is a variant of stochastic gradient descent where the gradients are
divided by a cache which grows with the sum of squares of recent gradients?

`RMSProp` is similar to `AdaGrad`, a popular variant of `SGD` which adaptively
tunes the learning rate of each parameter. `AdaGrad` lowers the learning rate for
each parameter monotonically over the course of training.
While this is analytically motivated for convex optimizations, it may not be ideal
for non-convex problems. `RMSProp` deals with this heuristically by allowing the
learning rates to rebound as the denominator decays over time.

Define the Root Mean Square (RMS) error criterion of the gradient as
:math:`RMS[g]_t = \sqrt{E[g^2]_t + \epsilon}`, where :math:`g` represents
gradient and :math:`E[g^2]_t` is the decaying average over past squared gradient.

The :math:`E[g^2]_t` is given by:

.. math::

  E[g^2]_t = \gamma * E[g^2]_{t-1} + (1-\gamma) * g_t^2

The update step is

.. math::

  \theta_{t+1} = \theta_t - \frac{\eta}{RMS[g]_t} g_t

The RMSProp code follows the version in
http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf
Tieleman & Hinton, 2012.

Hinton suggests the momentum term :math:`\gamma` to be 0.9 and the learning rate
:math:`\eta` to be 0.001.





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weight                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``grad``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Gradient                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``n``                                  | NDArray-or-Symbol                                          |
|                                        | n                                                          |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate                                              |
+----------------------------------------+------------------------------------------------------------+
| ``gamma1``                             | float, optional, default=0.949999988.                      |
|                                        |                                                            |
|                                        | The decay rate of momentum estimates.                      |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | float, optional, default=9.99999994e-09.                   |
|                                        |                                                            |
|                                        | A small constant for numerical stability.                  |
+----------------------------------------+------------------------------------------------------------+
| ``wd``                                 | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Weight decay augments the objective function with a        |
|                                        | regularization term that penalizes large weights. The      |
|                                        | penalty scales with the square of the magnitude of each    |
|                                        | weight.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``rescale.grad``                       | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Rescale gradient to grad = rescale_grad*grad.              |
+----------------------------------------+------------------------------------------------------------+
| ``clip.gradient``                      | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | Clip gradient to the range of [-clip_gradient,             |
|                                        | clip_gradient] If clip_gradient <= 0, gradient clipping is |
|                                        | turned off. grad = max(min(grad, clip_gradient),           |
|                                        | -clip_gradient).                                           |
+----------------------------------------+------------------------------------------------------------+
| ``clip.weights``                       | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | Clip weights to the range of [-clip_weights, clip_weights] |
|                                        | If clip_weights <= 0, weight clipping is turned off.       |
|                                        | weights = max(min(weights, clip_weights),                  |
|                                        | -clip_weights).                                            |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L797

