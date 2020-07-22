

``mx.symbol.LeakyReLU``
==============================================

Description
----------------------

Applies Leaky rectified linear unit activation element-wise to the input.

Leaky ReLUs attempt to fix the "dying ReLU" problem by allowing a small `slope`
when the input is negative and has a slope of one when input is positive.

The following modified ReLU Activation functions are supported:

	- *elu*: Exponential Linear Unit. `y = x > 0 ? x : slope * (exp(x)-1)`
	- *selu*: Scaled Exponential Linear Unit. `y = lambda * (x > 0 ? x : alpha * (exp(x) - 1))` where
  *lambda = 1.0507009873554804934193349852946* and *alpha = 1.6732632423543772848170429916717*.
- *leaky*: Leaky ReLU. `y = x > 0 ? x : slope * x`
- *prelu*: Parametric ReLU. This is same as *leaky* except that `slope` is learnt during training.
- *rrelu*: Randomized ReLU. same as *leaky* but the `slope` is uniformly and randomly chosen from
  *[lower_bound, upper_bound)* for training, while fixed to be
  *(lower_bound+upper_bound)/2* for inference.




Usage
----------

.. code:: r

	mx.symbol.LeakyReLU(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to activation function.                         |
+----------------------------------------+------------------------------------------------------------+
| ``gamma``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data to activation function.                         |
+----------------------------------------+------------------------------------------------------------+
| ``act.type``                           | {'elu', 'gelu', 'leaky', 'prelu', 'rrelu',                 |
|                                        | 'selu'},optional,                                          |
|                                        | default='leaky'.                                           |
|                                        |                                                            |
|                                        | Activation function to be applied.                         |
+----------------------------------------+------------------------------------------------------------+
| ``slope``                              | float, optional, default=0.25.                             |
|                                        |                                                            |
|                                        | Init slope for the activation. (For leaky and elu only)    |
+----------------------------------------+------------------------------------------------------------+
| ``lower.bound``                        | float, optional, default=0.125.                            |
|                                        |                                                            |
|                                        | Lower bound of random slope. (For rrelu only)              |
+----------------------------------------+------------------------------------------------------------+
| ``upper.bound``                        | float, optional, default=0.333999991.                      |
|                                        |                                                            |
|                                        | Upper bound of random slope. (For rrelu only)              |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/leaky_relu.cc#L161

