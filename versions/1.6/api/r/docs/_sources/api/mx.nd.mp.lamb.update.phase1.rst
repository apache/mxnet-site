

``mx.nd.mp.lamb.update.phase1``
==============================================================

Description
----------------------

Mixed Precision version of Phase I of lamb update
it performs the following operations and returns g:.

Link to paper: https://arxiv.org/pdf/1904.00962.pdf

.. math::

              \begin{gather*}
              grad32 = grad(float16) * rescale_grad
              if (grad < -clip_gradient)
              then
                   grad = -clip_gradient
              if (grad > clip_gradient)
              then
                   grad = clip_gradient

              mean = beta1 * mean + (1 - beta1) * grad;
              variance = beta2 * variance + (1. - beta2) * grad ^ 2;

              if (bias_correction)
              then
                   mean_hat = mean / (1. - beta1^t);
                   var_hat = var / (1 - beta2^t);
                   g = mean_hat / (var_hat^(1/2) + epsilon) + wd * weight32;
              else
                   g = mean / (var_data^(1/2) + epsilon) + wd * weight32;
              \end{gather*}

          



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
| ``mean``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Moving mean                                                |
+----------------------------------------+------------------------------------------------------------+
| ``var``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Moving variance                                            |
+----------------------------------------+------------------------------------------------------------+
| ``weight32``                           | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weight32                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``beta1``                              | float, optional, default=0.899999976.                      |
|                                        |                                                            |
|                                        | The decay rate for the 1st moment estimates.               |
+----------------------------------------+------------------------------------------------------------+
| ``beta2``                              | float, optional, default=0.999000013.                      |
|                                        |                                                            |
|                                        | The decay rate for the 2nd moment estimates.               |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | float, optional, default=9.99999997e-07.                   |
|                                        |                                                            |
|                                        | A small constant for numerical stability.                  |
+----------------------------------------+------------------------------------------------------------+
| ``t``                                  | int, required.                                             |
|                                        |                                                            |
|                                        | Index update count.                                        |
+----------------------------------------+------------------------------------------------------------+
| ``bias.correction``                    | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Whether to use bias correction.                            |
+----------------------------------------+------------------------------------------------------------+
| ``wd``                                 | float, required.                                           |
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

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L1033

