

``mx.nd.Dropout``
==================================

Description
----------------------

Applies dropout operation to input array.

- During training, each element of the input is set to zero with probability p.
  The whole array is rescaled by :math:`1/(1-p)` to keep the expected
  sum of the input unchanged.

- During testing, this operator does not change the input if mode is 'training'.
  If mode is 'always', the same computaion as during training will be applied.


**Example**::

	 
	 random.seed(998)
	 input_array = array([[3., 0.5,  -0.5,  2., 7.],
	 [2., -0.4,   7.,  3., 0.2]])
	 a = symbol.Variable('a')
	 dropout = symbol.Dropout(a, p = 0.2)
	 executor = dropout.simple_bind(a = input_array.shape)
	 
	 ## If training
	 executor.forward(is_train = True, a = input_array)
	 executor.outputs
	 [[ 3.75   0.625 -0.     2.5    8.75 ]
	 [ 2.5   -0.5    8.75   3.75   0.   ]]
	 
	 ## If testing
	 executor.forward(is_train = False, a = input_array)
	 executor.outputs
	 [[ 3.     0.5   -0.5    2.     7.   ]
	 [ 2.    -0.4    7.     3.     0.2  ]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input array to which dropout will be applied.              |
+----------------------------------------+------------------------------------------------------------+
| ``p``                                  | float, optional, default=0.5.                              |
|                                        |                                                            |
|                                        | Fraction of the input that gets dropped out during         |
|                                        | training                                                   |
|                                        | time.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'always', 'training'},optional, default='training'.       |
|                                        |                                                            |
|                                        | Whether to only turn on dropout during training or to also |
|                                        | turn on for                                                |
|                                        | inference.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``axes``                               | Shape(tuple), optional, default=[].                        |
|                                        |                                                            |
|                                        | Axes for variational dropout kernel.                       |
+----------------------------------------+------------------------------------------------------------+
| ``cudnn.off``                          | boolean or None, optional, default=0.                      |
|                                        |                                                            |
|                                        | Whether to turn off cudnn in dropout operator. This option |
|                                        | is ignored if axes is                                      |
|                                        | specified.                                                 |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/dropout.cc#L96

