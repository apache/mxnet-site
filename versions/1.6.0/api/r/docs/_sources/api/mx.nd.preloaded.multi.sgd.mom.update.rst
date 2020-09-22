

``mx.nd.preloaded.multi.sgd.mom.update``
================================================================================

Description
----------------------

Momentum update function for Stochastic Gradient Descent (SGD) optimizer.

Momentum update has better convergence rates on neural networks. Mathematically it looks
like below:

.. math::

  v_1 = \alpha * \nabla J(W_0)\\
  v_t = \gamma v_{t-1} - \alpha * \nabla J(W_{t-1})\\
  W_t = W_{t-1} + v_t

It updates the weights using::

	 v = momentum * v - learning_rate * gradient
	 weight += v
	 
	 Where the parameter ``momentum`` is the decay rate of momentum estimates at each epoch.
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Weights, gradients, momentum, learning rates and weight    |
|                                        | decays                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | The decay rate of momentum estimates at each epoch.        |
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
| ``num.weights``                        | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Number of updated weights.                                 |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/contrib/preloaded_multi_sgd.cc#L91

