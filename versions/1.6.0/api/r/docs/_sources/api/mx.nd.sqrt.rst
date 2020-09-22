

``mx.nd.sqrt``
============================

Description
----------------------

Returns element-wise square-root value of the input.

.. math::

   \textrm{sqrt}(x) = \sqrt{x}


**Example**::

	 
	 sqrt([4, 9, 16]) = [2, 3, 4]
	 
	 The storage type of ``sqrt`` output depends upon the input storage type:
	 
	- sqrt(default) = default
	- sqrt(row_sparse) = row_sparse
	- sqrt(csr) = csr
	 
	 
	 


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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_pow.cc#L142

