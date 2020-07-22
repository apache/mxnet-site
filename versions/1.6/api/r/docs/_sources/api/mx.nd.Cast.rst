

``mx.nd.Cast``
============================

Description
----------------------

Casts all elements of the input to a new type.


.. note:: ``Cast`` is deprecated. Use ``cast`` instead.


**Example**::

	 
	 cast([0.9, 1.3], dtype='int32') = [0, 1]
	 cast([1e20, 11.1], dtype='float16') = [inf, 11.09375]
	 cast([300, 11.1, 10.9, -1, -3], dtype='uint8') = [44, 11, 10, 255, 253]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'bool', 'float16', 'float32', 'float64', 'int32',         |
|                                        | 'int64', 'int8', 'uint8'},                                 |
|                                        | required.                                                  |
|                                        |                                                            |
|                                        | Output data type.                                          |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L665

