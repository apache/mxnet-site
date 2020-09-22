

``mx.symbol.arctan``
========================================

Description
----------------------

Returns element-wise inverse tangent of the input array.

The output is in the closed interval :math:`[-\pi/2, \pi/2]`

.. math::

   arctan([-1, 0, 1]) = [-\pi/4, 0, \pi/4]

The storage type of ``arctan`` output depends upon the input storage type:

	- arctan(default) = default
	- arctan(row_sparse) = row_sparse
	- arctan(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.arctan(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L227

