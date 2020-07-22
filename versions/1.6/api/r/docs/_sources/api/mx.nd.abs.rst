

``mx.nd.abs``
==========================

Description
----------------------

Returns element-wise absolute value of the input.


**Example**::

	 
	 abs([-2, 0, 3]) = [2, 0, 3]
	 
	 The storage type of ``abs`` output depends upon the input storage type:
	 
	- abs(default) = default
	- abs(row_sparse) = row_sparse
	- abs(csr) = csr
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L721

