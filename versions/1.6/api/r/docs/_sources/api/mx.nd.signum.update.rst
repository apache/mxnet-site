

``mx.nd.signum.update``
==============================================

Description
----------------------

SIGN momentUM (Signum) optimizer.

.. math::

	g_t = \nabla J(W_{t-1})\\
 m_t = \beta m_{t-1} + (1 - \beta) g_t\\
 W_t = W_{t-1} - \eta_t \text{sign}(m_t)

It updates the weights using::
	 state = momentum * state + (1-momentum) * gradient
	 weight = weight - learning_rate * sign(state)
	 
	 Where the parameter ``momentum`` is the decay rate of momentum estimates at each epoch.
	 

.. note::    - sparse ndarray not supported for this optimizer yet.




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
| ``mom``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Momentum                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate                                              |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | The decay rate of momentum estimates at each epoch.        |
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
| ``wd.lh``                              | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | The amount of weight decay that does not go into           |
|                                        | gradient/momentum calculationsotherwise do weight decay    |
|                                        | algorithmically                                            |
|                                        | only.                                                      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L92

