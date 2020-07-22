

``mx.nd.ftml.update``
==========================================

Description
----------------------

The FTML optimizer described in
*FTML - Follow the Moving Leader in Deep Learning*,
available at http://proceedings.mlr.press/v70/zheng17a/zheng17a.pdf.

.. math::

	g_t = \nabla J(W_{t-1})\\
 v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2\\
 d_t = \frac{ 1 - \beta_1^t }{ \eta_t } (\sqrt{ \frac{ v_t }{ 1 - \beta_2^t } } + \epsilon)
 \sigma_t = d_t - \beta_1 d_{t-1}
 z_t = \beta_1 z_{ t-1 } + (1 - \beta_1^t) g_t - \sigma_t W_{t-1}
 W_t = - \frac{ z_t }{ d_t }





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
| ``d``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Internal state ``d_t``                                     |
+----------------------------------------+------------------------------------------------------------+
| ``v``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Internal state ``v_t``                                     |
+----------------------------------------+------------------------------------------------------------+
| ``z``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Internal state ``z_t``                                     |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``beta1``                              | float, optional, default=0.600000024.                      |
|                                        |                                                            |
|                                        | Generally close to 0.5.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``beta2``                              | float, optional, default=0.999000013.                      |
|                                        |                                                            |
|                                        | Generally close to 1.                                      |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | double, optional, default=9.9999999392252903e-09.          |
|                                        |                                                            |
|                                        | Epsilon to prevent div 0.                                  |
+----------------------------------------+------------------------------------------------------------+
| ``t``                                  | int, required.                                             |
|                                        |                                                            |
|                                        | Number of update.                                          |
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
| ``clip.grad``                          | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | Clip gradient to the range of [-clip_gradient,             |
|                                        | clip_gradient] If clip_gradient <= 0, gradient clipping is |
|                                        | turned off. grad = max(min(grad, clip_gradient),           |
|                                        | -clip_gradient).                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L640

