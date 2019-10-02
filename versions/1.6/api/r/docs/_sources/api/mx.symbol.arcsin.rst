

``mx.symbol.arcsin``
========================================

Description
----------------------

Returns element-wise inverse sine of the input array.

The input should be in the range `[-1, 1]`.
The output is in the closed interval of [:math:`-\pi/2`, :math:`\pi/2`].

.. math::

   arcsin([-1, -.707, 0, .707, 1]) = [-\pi/2, -\pi/4, 0, \pi/4, \pi/2]

The storage type of ``arcsin`` output depends upon the input storage type:

	- arcsin(default) = default
	- arcsin(row_sparse) = row_sparse
	- arcsin(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.arcsin(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L187

