

``mx.symbol.sign``
====================================

Description
----------------------

Returns element-wise sign of the input.


**Example**::

	 
	 sign([-2, 0, 3]) = [-1, 0, 1]
	 
	 The storage type of ``sign`` output depends upon the input storage type:
	 
	- sign(default) = default
	- sign(row_sparse) = row_sparse
	- sign(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.sign(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L759

