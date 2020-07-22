

``mx.nd.ceil``
============================

Description
----------------------

Returns element-wise ceiling of the input.

The ceil of the scalar x is the smallest integer i, such that i >= x.


**Example**::

	 
	 ceil([-2.1, -1.9, 1.5, 1.9, 2.1]) = [-2., -1.,  2.,  2.,  3.]
	 
	 The storage type of ``ceil`` output depends upon the input storage type:
	 
	- ceil(default) = default
	- ceil(row_sparse) = row_sparse
	- ceil(csr) = csr
	 
	 
	 


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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L818

