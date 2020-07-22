

``mx.nd.Activation``
========================================

Description
----------------------

Applies an activation function element-wise to the input.

The following activation functions are supported:

	- `relu`: Rectified Linear Unit, :math:`y = max(x, 0)`
	- `sigmoid`: :math:`y = \frac{1}{1 + exp(-x)}`
	- `tanh`: Hyperbolic tangent, :math:`y = \frac{exp(x) - exp(-x)}{exp(x) + exp(-x)}`
	- `softrelu`: Soft ReLU, or SoftPlus, :math:`y = log(1 + exp(x))`
	- `softsign`: :math:`y = \frac{x}{1 + abs(x)}`





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``act.type``                           | {'relu', 'sigmoid', 'softrelu', 'softsign', 'tanh'},       |
|                                        | required.                                                  |
|                                        |                                                            |
|                                        | Activation function to be applied.                         |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/activation.cc#L168

