

``mx.nd.broadcast.div``
==============================================

Description
----------------------

Returns element-wise division of the input arrays with broadcasting.


**Example**::

	 
	 x = [[ 6.,  6.,  6.],
	 [ 6.,  6.,  6.]]
	 
	 y = [[ 2.],
	 [ 3.]]
	 
	 broadcast_div(x, y) = [[ 3.,  3.,  3.],
	 [ 2.,  2.,  2.]]
	 
	 Supported sparse operations:
	 
	 broadcast_div(csr, dense(1D)) = csr
	 
	 
	 


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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_basic.cc#L187

