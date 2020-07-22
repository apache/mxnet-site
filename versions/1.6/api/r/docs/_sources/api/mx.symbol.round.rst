

``mx.symbol.round``
======================================

Description
----------------------

Returns element-wise rounded value to the nearest integer of the input.


**Example**::

	 
	 round([-1.5, 1.5, -1.9, 1.9, 2.1]) = [-2.,  2., -2.,  2.,  2.]
	 
	 The storage type of ``round`` output depends upon the input storage type:
	 
	- round(default) = default
	- round(row_sparse) = row_sparse
	- round(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.round(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L778

