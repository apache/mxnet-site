

``mx.nd.broadcast.power``
==================================================

Description
----------------------

Returns result of first array elements raised to powers from second array, element-wise with broadcasting.


**Example**::

	 
	 x = [[ 1.,  1.,  1.],
	 [ 1.,  1.,  1.]]
	 
	 y = [[ 0.],
	 [ 1.]]
	 
	 broadcast_power(x, y) = [[ 2.,  2.,  2.],
	 [ 4.,  4.,  4.]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | First input to the function                                |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Second input to the function                               |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_extended.cc#L45

