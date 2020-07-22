

``mx.symbol.ftrl_update``
==================================================

Description
----------------------

Update function for Ftrl optimizer.
Referenced from *Ad Click Prediction: a View from the Trenches*, available at
http://dl.acm.org/citation.cfm?id=2488200.

It updates the weights using::

	 rescaled_grad = clip(grad * rescale_grad, clip_gradient)
	 z += rescaled_grad - (sqrt(n + rescaled_grad**2) - sqrt(n)) * weight / learning_rate
	 n += rescaled_grad**2
	 w = (sign(z) * lamda1 - z) / ((beta + sqrt(n)) / learning_rate + wd) * (abs(z) > lamda1)
	 
	 If w, z and n are all of ``row_sparse`` storage type,
only the row slices whose indices appear in grad.indices are updated (for w, z and n)::

	 for row in grad.indices:
	 rescaled_grad[row] = clip(grad[row] * rescale_grad, clip_gradient)
	 z[row] += rescaled_grad[row] - (sqrt(n[row] + rescaled_grad[row]**2) - sqrt(n[row])) * weight[row] / learning_rate
	 n[row] += rescaled_grad[row]**2
	 w[row] = (sign(z[row]) * lamda1 - z[row]) / ((beta + sqrt(n[row])) / learning_rate + wd) * (abs(z[row]) > lamda1)
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.ftrl_update(...)

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
| ``z``                                  | NDArray-or-Symbol                                          |
|                                        | z                                                          |
+----------------------------------------+------------------------------------------------------------+
| ``n``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Square of grad                                             |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate                                              |
+----------------------------------------+------------------------------------------------------------+
| ``lamda1``                             | float, optional, default=0.00999999978.                    |
|                                        |                                                            |
|                                        | The L1 regularization coefficient.                         |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Per-Coordinate Learning Rate beta.                         |
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
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L876

