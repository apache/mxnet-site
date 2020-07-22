

``mx.nd.rmspropalex.update``
========================================================

Description
----------------------

Update function for RMSPropAlex optimizer.

`RMSPropAlex` is non-centered version of `RMSProp`.

Define :math:`E[g^2]_t` is the decaying average over past squared gradient and
:math:`E[g]_t` is the decaying average over past gradient.

.. math::

  E[g^2]_t = \gamma_1 * E[g^2]_{t-1} + (1 - \gamma_1) * g_t^2\\
  E[g]_t = \gamma_1 * E[g]_{t-1} + (1 - \gamma_1) * g_t\\
  \Delta_t = \gamma_2 * \Delta_{t-1} - \frac{\eta}{\sqrt{E[g^2]_t - E[g]_t^2 + \epsilon}} g_t\\

The update step is

.. math::

  \theta_{t+1} = \theta_t + \Delta_t

The RMSPropAlex code follows the version in
http://arxiv.org/pdf/1308.0850v5.pdf Eq(38) - Eq(45) by Alex Graves, 2013.

Graves suggests the momentum term :math:`\gamma_1` to be 0.95, :math:`\gamma_2`
to be 0.9 and the learning rate :math:`\eta` to be 0.0001.




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
| ``g``                                  | NDArray-or-Symbol                                          |
|                                        | g                                                          |
+----------------------------------------+------------------------------------------------------------+
| ``delta``                              | NDArray-or-Symbol                                          |
|                                        | delta                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate                                              |
+----------------------------------------+------------------------------------------------------------+
| ``gamma1``                             | float, optional, default=0.949999988.                      |
|                                        |                                                            |
|                                        | Decay rate.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``gamma2``                             | float, optional, default=0.899999976.                      |
|                                        |                                                            |
|                                        | Decay rate.                                                |
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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L836

