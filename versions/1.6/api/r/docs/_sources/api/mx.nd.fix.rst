

``mx.nd.fix``
==========================

Description
----------------------

Returns element-wise rounded value to the nearest \
integer towards zero of the input.


**Example**::

	 
	 fix([-2.1, -1.9, 1.9, 2.1]) = [-2., -1.,  1., 2.]
	 
	 The storage type of ``fix`` output depends upon the input storage type:
	 
	- fix(default) = default
	- fix(row_sparse) = row_sparse
	- fix(csr) = csr
	 
	 
	 


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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L875

