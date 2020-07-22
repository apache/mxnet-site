

``mx.symbol.sinh``
====================================

Description
----------------------

Returns the hyperbolic sine of the input array, computed element-wise.

.. math::

   sinh(x) = 0.5\times(exp(x) - exp(-x))

The storage type of ``sinh`` output depends upon the input storage type:

	- sinh(default) = default
	- sinh(row_sparse) = row_sparse
	- sinh(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.sinh(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L313

