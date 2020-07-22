

``mx.symbol.multi_mp_sgd_update``
==================================================================

Description
----------------------

Update function for multi-precision Stochastic Gradient Descent (SDG) optimizer.

It updates the weights using::

	 weight = weight - learning_rate * (gradient + wd * weight)
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.multi_mp_sgd_update(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Weights                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``lrs``                                | tuple of <float>, required.                                |
|                                        |                                                            |
|                                        | Learning rates.                                            |
+----------------------------------------+------------------------------------------------------------+
| ``wds``                                | tuple of <float>, required.                                |
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
| ``num.weights``                        | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Number of updated weights.                                 |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L417

