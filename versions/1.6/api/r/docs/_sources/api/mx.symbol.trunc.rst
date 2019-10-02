

``mx.symbol.trunc``
======================================

Description
----------------------

Return the element-wise truncated value of the input.

The truncated value of the scalar x is the nearest integer i which is closer to
zero than x is. In short, the fractional part of the signed number x is discarded.


**Example**::

	 
	 trunc([-2.1, -1.9, 1.5, 1.9, 2.1]) = [-2., -1.,  1.,  1.,  2.]
	 
	 The storage type of ``trunc`` output depends upon the input storage type:
	 
	- trunc(default) = default
	- trunc(row_sparse) = row_sparse
	- trunc(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.trunc(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L857

